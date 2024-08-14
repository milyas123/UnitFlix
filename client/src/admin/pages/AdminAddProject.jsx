import { useState } from "react";
import Header from "../components/common/Header";
import Button from "../components/common/Button";
import ProjectGeneralInformation from "../components/adminAddProject/ProjectGeneralInformation";
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

const serverURL = import.meta.env.VITE_SERVER_URL;
const initialFormData = {
  title: "",
  overview: "",
  status: "Pre Launch",
  featured: true, 
  price: "",
  propertyType: 0,
  developer : 0,
  coverImage: null,
  brochure: null,
  floorPlan: null,
  purpose: 0,
  propertyDetails: [],
  downPayment: "",
  paymentPlan: "",
  handOver: "",
  location: 0,
  keyHighlights: [
    {
      title: "Feature",
      description:
        "Features meticulously crafted studios, 1, 2 & 3 bedroom apartments, as well as exclusive 3-bedroom pool villas and 4-bedroom royal penthouses with private pools.",
    },
  ],
  features: [
    {
      name: "Parking Spaces",
      icon: "RiParkingBoxLine",
    },
  ],
  paymentPlanItems: [
    {
      Title: "Down Payment",
      Description: "On Booking Date",
      Amount: 20,
    },
    {
      Title: "During Construction",
      Description: "1st - 28th Installment",
      Amount: 50,
    },
    {
      Title: "On Handover",
      Description: "100% Complete",
      Amount: 30,
    },
  ],
  galleryImages: [],
};

const AdminAddProject = () => {
  const [formData, setFormData] = useState(initialFormData);

  const [showAddAmenityModal, setShowAddAmenityModal] = useState(false);
  const [showAddPaymentPlanModal, setShowAddPaymentPlanModal] = useState(false);
  const [showAddPropertyItemModal, setShowAddPropertyItemModal] = useState(false);
  const [showAddKeyHighlightModal, setShowAddKeyHighlightModal] = useState(false);
  const [editKeyHighlightIndex, setEditKeyHighlightIndex] = useState(null);
  const [editAmenityIndex, setEditAmenityIndex] = useState(null);
  const [editPaymentPlanIndex, setEditPaymentPlanIndex] = useState(null);
  const [editPropertyIndex, setEditPropertyIndex] = useState(null);

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
      [field]: parseInt(value),
    }));
  };

  const handleStatusSelect = (status) => {
    setFormData((prevData) => ({
      ...prevData,
      status,
    }));
  };

  const handleFeaturedSelect = (featured) => {
    setFormData((prevData) => ({
      ...prevData,
      featured,
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
        newProperties[editPropertyIndex] = property;
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
    setFormData((prevData) => ({
      ...prevData,
      propertyDetails: prevData.propertyDetails.filter((_, i) => i !== index),
    }));
  };

  const handleAddHighlight = (title, description) => {
    setFormData((prevData) => {
      const newKeyHighlights = [...prevData.keyHighlights];
      if (editKeyHighlightIndex !== null) {
        newKeyHighlights[editKeyHighlightIndex] = { title, description };
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
    setFormData((prevData) => ({
      ...prevData,
      keyHighlights: prevData.keyHighlights.filter((_, i) => i !== index),
    }));
  };

  const handleAddAmenity = (name, icon) => {
    setFormData((prevData) => {
      const newFeatures = [...prevData.features];
      if (editAmenityIndex !== null) {
        newFeatures[editAmenityIndex] = { name, icon };
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
    setFormData((prevData) => ({
      ...prevData,
      features: prevData.features.filter((_, i) => i !== index),
    }));
  };

  const handleAddPaymentPlan = (Title, Description, Amount) => {
    setFormData((prevData) => {
      const newPaymentPlans = [...prevData.paymentPlanItems];
      if (editPaymentPlanIndex !== null) {
        newPaymentPlans[editPaymentPlanIndex] = { Title, Description, Amount };
        setEditPaymentPlanIndex(null);
      } else {
        newPaymentPlans.push({ Title, Description, Amount });
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
    setFormData((prevData) => ({
      ...prevData,
      paymentPlanItems: prevData.paymentPlanItems.filter((_, i) => i !== index),
    }));
  };

  const handleAddGalleryImage = (file) => {
    setFormData((prevData) => ({
      ...prevData,
      galleryImages: [...prevData.galleryImages, file],
    }));
  };

  const handleDeleteGalleryImage = (index) => {
    setFormData((prevData) => ({
      ...prevData,
      galleryImages: prevData.galleryImages.filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = async () => {
    const form = new FormData();

    const overview = {
      Text: formData.overview
    };

    form.append("title", formData.title);
    form.append("overview", JSON.stringify(overview));
    form.append("status", formData.status);
    form.append("price", formData.price);
    
    if (formData.coverImage) {
      form.append("coverImage", formData.coverImage);
    }
    if (formData.brochure) {
      form.append("brochure", formData.brochure);
    }
    if (formData.floorPlan) {
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
    formData.galleryImages.forEach((image, index) => {
      form.append(`galleryImages`, image);
    });

    // Retrieve token from localStorage
    const token = localStorage.getItem("token");

    try {
      await axios.post(
        `${serverURL}/property/create-project`,
        form,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        },
      );
      
      toast.success("Project added successfully!");
      setFormData(initialFormData);
    } catch (error) {
      toast.error("Error submitting form");
      console.error("Error submitting form", error);
    }
  };

  return (
    <>
      <div className="mx-auto flex w-[80%] flex-col gap-7 pb-4">
        <Header title="Add Project" />

        <ProjectGeneralInformation
          formData={formData}
          handleChange={handleChange}
          handleStatusSelect={handleStatusSelect}
          handleFeaturedSelect={handleFeaturedSelect}
          handleFileChange={handleFileChange}
        />
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
          <Button className="rounded-md border-red-700 bg-red-700 hover:border-mirage">
            Cancel
          </Button>
          <Button className="rounded-md" onClick={handleSubmit}>
            Submit
          </Button>
        </div>
      </div>
      {showAddPropertyItemModal && (
        <AddPropertyItemModal
          onClose={() => setShowAddPropertyItemModal(false)}
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
          onClose={() => setShowAddKeyHighlightModal(false)}
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
