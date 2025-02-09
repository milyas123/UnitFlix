import {useEffect, useState, lazy} from "react";

import Header from "../components/common/Header";
import Button from "../components/common/Button";
const ProjectGeneralInformation = lazy(() => import("../components/adminAddProject/ProjectGeneralInformation"));
import ProjectKeyHighlights from "../components/adminAddProject/ProjectKeyHighlights";
import ProjectFeaturesAndAmenities from "../components/adminAddProject/ProjectFeaturesAndAmenities";
import ProjectGallery from "../components/adminAddProject/ProjectGallery";
import ProjectPropertyInformation from "../components/adminAddProject/ProjectPropertyInformation";
import ProjectPropertyDetails from "../components/adminAddProject/ProjectPropertyDetails";
import ProjectPaymentPlan from "../components/adminAddProject/ProjectPaymentPlan";
import AddPropertyItemModal from "../components/adminAddProject/modals/AddPropertyItemModal";
import AddKeyHighlightModal from "../components/adminAddProject/modals/AddKeyHighlightModal";
import AddAmenityModal from "../components/adminAddProject/modals/AddAmenityModal";
import AddPaymentPlanModal from "../components/adminAddProject/modals/AddPaymentPlanModal";

import axios from "axios";
import { toast } from "react-toastify";
import {useNavigate, useParams} from "react-router-dom";
import AnimLazyLoader from "@/website/components/common/AnimLazyLoader.jsx";

const serverURL = import.meta.env.VITE_SERVER_URL;
const initialFormData = {
  title: "",
  tags: "",
  overview: "",
  status: "",
  featured: false,
  price: "",
  propertyType: 1,
  developer: 1,
  coverImage: null,
  brochure: null,
  floorPlan: null,
  purpose: 0,
  propertyDetails: [],
  downPayment: "",
  paymentPlan: "",
  handOver: "",
  location: 1,
  keyHighlights: [],
  features: [],
  paymentPlanItems: [],
  galleryImages: [],
};

const AdminAddProject = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [formData, setFormData] = useState(initialFormData);

  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showAddAmenityModal, setShowAddAmenityModal] = useState(false);
  const [showAddPaymentPlanModal, setShowAddPaymentPlanModal] = useState(false);
  const [showAddPropertyItemModal, setShowAddPropertyItemModal] = useState(false);
  const [showAddKeyHighlightModal, setShowAddKeyHighlightModal] = useState(false);
  const [editKeyHighlightIndex, setEditKeyHighlightIndex] = useState(null);
  const [editAmenityIndex, setEditAmenityIndex] = useState(null);
  const [editPaymentPlanIndex, setEditPaymentPlanIndex] = useState(null);
  const [editPropertyIndex, setEditPropertyIndex] = useState(null);

  const fetchProjectData = async (id) => {
    try {
      const response = await axios.get(`${serverURL}/property/${id}`);
      const property = response.data.data;

      // Filter files based on their purpose
      const coverImage = property.files.find((file) => file.purpose === 0) || undefined;
      const galleryImages = property.files.filter((file) => file.purpose === 1);
      const brochure = property.files.filter((file) => file.purpose === 2)[0];
      const floorPlan = property.files.filter((file) => file.purpose === 3)[0];
      setFormData({
        title: property.title,
        tags: property.tags,
        overview: property.overview?.text || "",
        featured: property.featured,
        brochure: brochure,
        floorPlan: floorPlan,
        status: property.status,
        price: property.price,
        coverImage: coverImage,
        propertyType: property.propertyType,
        purpose: property.purpose,
        downPayment: property.downPayment,
        paymentPlan: property.paymentPlan,
        handOver: property.handOver,
        developer: property.developer,
        city: property.city || "",
        location: property.location,
        keyHighlights: property.keyHighlights || [],
        features: property.features || [],
        galleryImages: galleryImages || [],
        propertyDetails: property.propertyDetails || [],
        paymentPlanItems: property.paymentPlanItems || [],
        galleryImagesToRemove: [],
        keyHighlightsToRemove: [],
        featuresToRemove: [],
        propertyDetailsToRemove: [],
        paymentPlanItemsToRemove: [],
      });

      setIsEditing(true);
    } catch (error) {
      toast.error("Failed to load property data");
      console.error("Error fetching property data", error);
    }
  };

  useEffect(() => {
    if (id) {
      fetchProjectData(id);
    }
  }, [id]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSelectChange = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleFileChange = (e, field) => {
    const file = e.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      [field]: file,
    }));
  };

  const handleAddPropertyItem = (property) => {
    setFormData((prevData) => {
      const newProperties = [...prevData.propertyDetails];
      if (editPropertyIndex !== null) {
        newProperties[editPropertyIndex].propertyType = property.propertyType;
        newProperties[editPropertyIndex].unitType = property.unitType;
        newProperties[editPropertyIndex].size = property.size;
        setEditPropertyIndex(null);
      } else {
        newProperties.push(property);
      }
      return {
        ...prevData,
        propertyDetails: newProperties,
      };
    });
    setShowAddPropertyItemModal(false);
  };

  const handleEditPropertyItem = (index) => {
    setEditPropertyIndex(index);
    setShowAddPropertyItemModal(true);
  };

  const handleDeletePropertyItem = (index) => {
    if(isEditing && formData.propertyDetails[index].id) {
      setFormData((prevData) => ({
        ...prevData,
        propertyDetailsToRemove: [...prevData.propertyDetailsToRemove, formData.propertyDetails[index].id],
        propertyDetails: prevData.propertyDetails.filter((_, i) => i !== index),
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        propertyDetails: prevData.propertyDetails.filter((_, i) => i !== index),
      }));
    }
  };

  const handleAddHighlight = (title, description) => {
    setFormData((prevData) => {
      const newKeyHighlights = [...prevData.keyHighlights];
      if (editKeyHighlightIndex !== null) {
        newKeyHighlights[editKeyHighlightIndex].title = title;
        newKeyHighlights[editKeyHighlightIndex].description = description;
        setEditKeyHighlightIndex(null);
      } else {
        newKeyHighlights.push({ title, description });
      }
      return {
        ...prevData,
        keyHighlights: newKeyHighlights,
      };
    });
    setShowAddKeyHighlightModal(false);
  };

  const handleEditHighlight = (index) => {
    setEditKeyHighlightIndex(index);
    setShowAddKeyHighlightModal(true);
  };

  const handleDeleteHighlight = (index) => {
    if(isEditing && formData.keyHighlights[index].id) {
      setFormData((prevData) => ({
        ...prevData,
        keyHighlightsToRemove: [...prevData.keyHighlightsToRemove, prevData.keyHighlights[index].id],
        keyHighlights: prevData.keyHighlights.filter((_, i) => i !== index),
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        keyHighlights: prevData.keyHighlights.filter((_, i) => i !== index),
      }));
    }
  };

  const handleAddAmenity = (name, icon) => {
    setFormData((prevData) => {
      const newFeatures = [...prevData.features];
      if (editAmenityIndex !== null) {
        newFeatures[editAmenityIndex].name = name;
        newFeatures[editAmenityIndex].icon = icon;
        setEditAmenityIndex(null);
      } else {
        newFeatures.push({ name, icon });
      }
      return {
        ...prevData,
        features: newFeatures,
      };
    });
    setShowAddAmenityModal(false);
  };

  const handleEditAmenity = (index) => {
    setEditAmenityIndex(index);
    setShowAddAmenityModal(true);
  };

  const handleDeleteAmenity = (index) => {
    if(isEditing && formData.features[index].id) {
      setFormData((prevData) => ({
        ...prevData,
        featuresToRemove: [...prevData.featuresToRemove, prevData.features[index].id],
        features: prevData.features.filter((_, i) => i !== index),
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        features: prevData.features.filter((_, i) => i !== index),
      }));
    }
  };

  const handleAddPaymentPlan = (title, description, amount) => {
    setFormData((prevData) => {
      const newPaymentPlans = [...prevData.paymentPlanItems];
      if (editPaymentPlanIndex !== null) {
        newPaymentPlans[editPaymentPlanIndex].title = title;
        newPaymentPlans[editPaymentPlanIndex].description = description;
        newPaymentPlans[editPaymentPlanIndex].amount = amount;
        setEditPaymentPlanIndex(null);
      } else {
        newPaymentPlans.push({ title, description, amount });
      }
      return {
        ...prevData,
        paymentPlanItems: newPaymentPlans,
      };
    });
    setShowAddPaymentPlanModal(false);
  };

  const handleEditPaymentPlan = (index) => {
    setEditPaymentPlanIndex(index);
    setShowAddPaymentPlanModal(true);
  };

  const handleDeletePaymentPlan = (index) => {
    if(isEditing && formData.paymentPlanItems[index].id) {
      setFormData((prevData) => ({
        ...prevData,
        paymentPlanItemsToRemove: [...prevData.paymentPlanItemsToRemove, prevData.paymentPlanItems[index].id],
        paymentPlanItems: prevData.paymentPlanItems.filter((_, i) => i !== index),
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        paymentPlanItems: prevData.paymentPlanItems.filter((_, i) => i !== index),
      }));
    }
  };

  const handleAddGalleryImage = (file) => {
    setFormData((prevData) => ({
      ...prevData,
      galleryImages: [...prevData.galleryImages, file],
    }));
  };

  const handleDeleteGalleryImage = (index) => {
    if(isEditing && formData.galleryImages[index].id) {
      setFormData((prevData) => ({
        ...prevData,
        galleryImagesToRemove: [...prevData.galleryImagesToRemove, prevData.galleryImages[index].id],
        galleryImages: prevData.galleryImages.filter((_, i) => i !== index),
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        galleryImages: prevData.galleryImages.filter((_, i) => i !== index),
      }));
    }
  };

  const handleSubmit = async () => {
    setLoading(true);
    const form = new FormData();

    const overview = {
      Text: formData.overview,
    };

    form.append("title", formData.title);
    form.append("tags", formData.tags);
    form.append("overview", JSON.stringify(overview));
    form.append("status", formData.status);
    form.append("price", formData.price);

    if (formData.coverImage && !formData.coverImage.id) {
      form.append("coverImage", formData.coverImage);
    }
    if (formData.brochure && !formData.brochure.id) {
      form.append("brochure", formData.brochure);
    }
    if (formData.floorPlan && !formData.floorPlan.id) {
      form.append("floorPlan", formData.floorPlan);
    }

    form.append("category", 1);
    form.append("developer", formData.developer);
    form.append("propertyType", formData.propertyType);
    form.append("purpose", formData.purpose);
    form.append("propertyDetails", JSON.stringify(formData.propertyDetails));
    form.append("downPayment", formData.downPayment);
    form.append("paymentPlan", formData.paymentPlan);
    form.append("handOver", formData.handOver);
    form.append("location", formData.location);
    form.append("keyHighlights", JSON.stringify(formData.keyHighlights));
    form.append("features", JSON.stringify(formData.features));
    form.append("paymentPlanItems", JSON.stringify(formData.paymentPlanItems));
    form.append("featured", formData.featured);

    if(isEditing) {
      form.append('galleryImagesToRemove', JSON.stringify(formData.galleryImagesToRemove));
      form.append('paymentPlanItemsToRemove', JSON.stringify(formData.paymentPlanItemsToRemove));
      form.append('featuresToRemove', JSON.stringify(formData.featuresToRemove));
      form.append('propertyDetailsToRemove', JSON.stringify(formData.propertyDetailsToRemove));
      form.append('keyHighlightsToRemove', JSON.stringify(formData.keyHighlightsToRemove));
    }

    formData.galleryImages.forEach((image) => {
      if(image && !image.id) {
        form.append(`galleryImages`, image);
      }
    });

    // Retrieve token from localStorage
    const token = localStorage.getItem("token");

    try {

      const endpoint = isEditing
          ? `${serverURL}/property/update-project/${id}`
          : `${serverURL}/property/create-project`;

      const method = isEditing ? "put" : "post";

      await axios({
          method,
          url: endpoint,
          data: form,
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
      });

      toast.success(`Project ${isEditing ? 'updated' : 'added'} successfully!`);
      setFormData(initialFormData);
      navigate("/admin/manage-properties");
    } catch (error) {
      console.log(error)
      const data = error.response.data;
      const errors = data.errors
      if(errors) {
        for(let err of errors) {
          toast.error(err);
        }
      }
      else {
        toast(data)
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="mx-auto flex w-[80%] flex-col gap-7 pb-4">
        <Header title="Add Project" showBackButton={true} />

        <AnimLazyLoader>
          <ProjectGeneralInformation
              formData={formData}
              handleChange={handleChange}
              handleSelect={handleSelectChange}
              handleFileChange={handleFileChange}
          />
        </AnimLazyLoader>
        <ProjectPropertyInformation
          formData={formData}
          handleChange={handleChange}
          showModal={setShowAddPropertyItemModal}
          editProperty={handleEditPropertyItem}
          deleteProperty={handleDeletePropertyItem}
          handleSelectChange={handleSelectChange}
        />
        <ProjectPropertyDetails
          formData={formData}
          handleFileChange={(e) => handleFileChange(e, "floorPlan")}
          handleLocationChange={handleSelectChange}
        />
        <ProjectKeyHighlights
          formData={formData}
          showModal={setShowAddKeyHighlightModal}
          handleEdit={handleEditHighlight}
          handleDelete={handleDeleteHighlight}
        />
        <ProjectFeaturesAndAmenities
          formData={formData}
          showModal={setShowAddAmenityModal}
          handleEdit={handleEditAmenity}
          handleDelete={handleDeleteAmenity}
        />
        <ProjectPaymentPlan
          formData={formData}
          showModal={setShowAddPaymentPlanModal}
          handleEdit={handleEditPaymentPlan}
          handleDelete={handleDeletePaymentPlan}
        />
        <ProjectGallery
          formData={formData}
          handleAddGalleryImage={handleAddGalleryImage}
          handleDeleteGalleryImage={handleDeleteGalleryImage}
        />

        <div className="flex items-center justify-end gap-x-3">
          <Button
            className="rounded-md border-red-700 bg-red-700 hover:border-mirage"
            onClick={() => navigate("/admin/manage-properties")}
          >
            Cancel
          </Button>
          <Button
            className="rounded-md"
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit"}
          </Button>
        </div>
      </div>
      {showAddPropertyItemModal && (
        <AddPropertyItemModal
          onClose={() => {
            setShowAddPropertyItemModal(false);
            setEditPropertyIndex(null);
          }}
          onSubmit={handleAddPropertyItem}
          editData={
            editPropertyIndex !== null
              ? formData.propertyDetails[editPropertyIndex]
              : null
          }
        />
      )}

      {showAddKeyHighlightModal && (
        <AddKeyHighlightModal
          onClose={() => {
            setShowAddKeyHighlightModal(false);
            setEditKeyHighlightIndex(null);
          }}
          onSubmit={handleAddHighlight}
          editData={
            editKeyHighlightIndex !== null
              ? formData.keyHighlights[editKeyHighlightIndex]
              : null
          }
        />
      )}

      {showAddAmenityModal && (
        <AddAmenityModal
          onClose={() => setShowAddAmenityModal(false)}
          onSubmit={handleAddAmenity}
          editData={
            editAmenityIndex !== null
              ? formData.features[editAmenityIndex]
              : null
          }
        />
      )}

      {showAddPaymentPlanModal && (
        <AddPaymentPlanModal
          onClose={() => setShowAddPaymentPlanModal(false)}
          onSubmit={handleAddPaymentPlan}
          editData={
            editPaymentPlanIndex !== null
              ? formData.paymentPlanItems[editPaymentPlanIndex]
              : null
          }
        />
      )}
    </>
  );
};

export default AdminAddProject;
