import React, { useState, useEffect } from "react";
import Header from "../components/common/Header";
import Button from "../components/common/Button";
import Gallery from "@/website/components/addProperty/Gallery";
import AddKeyHighlights from "@/website/components/addProperty/AddKeyHighlights";
import GeneralInformation from "@/website/components/addProperty/GeneralInformation";
import PropertyInformation from "@/website/components/addProperty/PropertyInformation";
import AddFeaturesAndAmenities from "@/website/components/addProperty/AddFeaturesAndAmenities";

import AddAmenityModal from "../components/adminAddProject/modals/AddAmenityModal";
import AddKeyHighlightModal from "../components/adminAddProject/modals/AddKeyHighlightModal";

import axios from "axios";
import { toast } from "react-toastify";
import { useParams, useNavigate } from "react-router-dom";

const initialFormData = {
  title: "",
  tags: "",
  overview: "",
  status: "",
  price: 0,
  coverImage: "",
  propertyType: 1,
  purpose: 0,
  area: "",
  beds: "",
  baths: "",
  city: "",
  location: 1,
  keyHighlights: [],
  features: [],
  galleryImages: [],
};

const AdminAddProperty = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const serverURL = import.meta.env.VITE_SERVER_URL;

  const [loading, setLoading] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(initialFormData);

  const fetchPropertyData = async (id) => {
    try {
      const response = await axios.get(`${serverURL}/property/${id}`);
      const property = response.data.data;

      // Filter files based on their purpose
      const coverImage =
        property.files.find((file) => file.purpose === 0) || undefined;
      const galleryImages = property.files
        .filter((file) => file.purpose === 1);

      setFormData({
        title: property.title,
        tags: property.tags,
        overview: property.overview?.text || "",
        status: property.status,
        price: property.price,
        coverImage: coverImage,
        propertyType: property.propertyType,
        purpose: property.purpose,
        area: property.area,
        beds: property.beds,
        baths: property.baths,
        city: property.city || "",
        location: property.location,
        keyHighlights: property.keyHighlights || [],
        features: property.features || [],
        galleryImages: galleryImages || [],
        galleryImagesToRemove: [],
        keyHighlightsToRemove: [],
        featuresToRemove: [],
      });

      setIsEditing(true);
    } catch (error) {
      toast.error("Failed to load property data");
      console.error("Error fetching property data", error);
    }
  };

  useEffect(() => {
    if (id) {
      fetchPropertyData(id);
    }
  }, [id]);

  const [showKeyHighlightModal, setShowKeyHighlightModal] = useState(false);
  const [editKeyHighlightIndex, setEditKeyHighlightIndex] = useState(null);

  const [showAmenityModal, setShowAmenityModal] = useState(false);
  const [editAmenityIndex, setEditAmenityIndex] = useState(null);

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

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      coverImage: file,
    }));
  };

  const handleRemoveCoverImage = () => {
    setFormData((prevData) => ({
      ...prevData,
      coverImage: "",
    }));
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
    setShowKeyHighlightModal(false);
  };

  const handleEditHighlight = (index) => {
    setEditKeyHighlightIndex(index);
    setShowKeyHighlightModal(true);
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
    setShowAmenityModal(false);
  };

  const handleEditAmenity = (index) => {
    setEditAmenityIndex(index);
    setShowAmenityModal(true);
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

  useEffect(() => {
    console.log(formData)
  }, [formData]);

  const handleSubmit = async () => {
    setLoading(true);

    const form = new FormData();
    const overview = { Text: formData.overview };

    form.append("category", 0);
    form.append("title", formData.title);
    form.append("tags", formData.tags);
    form.append("overview", JSON.stringify(overview));
    form.append("status", formData.status);
    form.append("price", formData.price);
    form.append("propertyType", formData.propertyTypeIndex);
    form.append("purpose", formData.purpose);
    form.append("area", formData.area);
    form.append("beds", formData.beds);
    form.append("baths", formData.baths);
    form.append("location", formData.location);
    form.append("features", JSON.stringify(formData.features));
    form.append("keyHighlights", JSON.stringify(formData.keyHighlights));

    if(isEditing) {
      form.append('galleryImagesToRemove', JSON.stringify(formData.galleryImagesToRemove));
      form.append('keyHighlightsToRemove', JSON.stringify(formData.keyHighlightsToRemove));
      form.append('featuresToRemove', JSON.stringify(formData.featuresToRemove));
    }

    if(formData.coverImage && !formData.coverImage.id) {
      form.append("coverImage", formData.coverImage);
    }

    if (formData.galleryImages) {
      formData.galleryImages.forEach((image) => {
        if(!image.id) {
          form.append(`galleryImages`, image);
        }
      });
    }

    const token = localStorage.getItem("token");

    try {
      const endpoint = isEditing
        ? `${serverURL}/property/update-property/${id}`
        : `${serverURL}/property/create-property`;

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

      toast.success(
        `Property ${isEditing ? "updated" : "added"} successfully!`,
      );
      setFormData(initialFormData);
      navigate("/admin/manage-properties");
    } catch (error) {
      const errors = error.response.data.errors
      for(let err of errors) {
        toast.error(err);
      }
      console.error("Error submitting form", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto flex w-[80%] flex-col gap-7 pb-4">
      <Header title={isEditing ? "Edit Property" : "Add Property"} showBackButton={true} />

      <GeneralInformation
        formData={formData}
        handleChange={handleChange}
        handleSelectChange={handleSelectChange}
        handleFileChange={handleFileChange}
        handleRemoveCoverImage={handleRemoveCoverImage}
        handleStatusClick={status => handleSelectChange('status', status)}
      />
      <PropertyInformation
        formData={formData}
        handleChange={handleChange}
        handleSelectChange={handleSelectChange}
      />
      <AddKeyHighlights
        formData={formData}
        showModal={setShowKeyHighlightModal}
        handleEdit={handleEditHighlight}
        handleDelete={handleDeleteHighlight}
      />
      <AddFeaturesAndAmenities
        formData={formData}
        showModal={setShowAmenityModal}
        handleEdit={handleEditAmenity}
        handleDelete={handleDeleteAmenity}
      />
      <Gallery
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

      {showKeyHighlightModal && (
        <AddKeyHighlightModal
          onClose={() => {
            setShowKeyHighlightModal(false)
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

      {showAmenityModal && (
        <AddAmenityModal
          onClose={() => {
            setShowAmenityModal(false)
            setEditAmenityIndex(null)
          }}
          onSubmit={handleAddAmenity}
          editData={
            editAmenityIndex !== null
              ? formData.features[editAmenityIndex]
              : null
          }
        />
      )}
    </div>
  );
};

export default AdminAddProperty;
