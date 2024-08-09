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
import { useLocation } from "react-router-dom";

const AdminAddProperty = () => {
  const location = useLocation();
  const serverURL = import.meta.env.VITE_SERVER_URL;

  const initialFormData = {
    title: "",
    overview: "",
    status: "Pre Launch",
    price: "",
    coverImage: "",
    propertyTypeIndex: 2,
    propertyCategoryIndex: 0,
    purpose: 0,
    area: "",
    beds: "",
    baths: "",
    city: "",
    location: "",
    keyHighlights: [
      {
        title: "Feature",
        Description:
          "Features meticulously crafted studios, 1, 2 & 3 bedroom apartments, as well as exclusive 3-bedroom pool villas and 4-bedroom royal penthouses with private pools.",
      },
    ],
    features: [
      {
        Name: "Parking Spaces",
        Icon: "RiParkingBoxLine",
      },
    ],
    galleryImages: [],
  };

  const [formData, setFormData] = useState(initialFormData);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (location.state?.property) {
      const property = location.state.property;
      setFormData({
        title: property?.title,
        overview: property?.overview,
        status: property.status,
        price: property?.price,
        coverImage: property?.coverImage,
        propertyTypeIndex: property?.propertyType - 1,
        propertyCategoryIndex: property?.category,
        purpose: property?.purpose,
        area: property?.area,
        beds: property?.beds,
        baths: property?.baths,
        city: property?.city,
        location: property?.location,
        keyHighlights: property?.keyHighlights,
        features: property?.features,
        galleryImages: property?.galleryImages,
      });
      setIsEditing(true);
    }
  }, [location.state]);

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

  const handleAddHighlight = (title, Description) => {
    setFormData((prevData) => {
      const newKeyHighlights = [...prevData.keyHighlights];
      if (editKeyHighlightIndex !== null) {
        newKeyHighlights[editKeyHighlightIndex] = { title, Description };
        setEditKeyHighlightIndex(null);
      } else {
        newKeyHighlights.push({ title, Description });
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
    setFormData((prevData) => ({
      ...prevData,
      keyHighlights: prevData.keyHighlights.filter((_, i) => i !== index),
    }));
  };

  const handleAddAmenity = (Name, Icon) => {
    setFormData((prevData) => {
      const newFeatures = [...prevData.features];
      if (editAmenityIndex !== null) {
        newFeatures[editAmenityIndex] = { Name, Icon };
        setEditAmenityIndex(null);
      } else {
        newFeatures.push({ Name, Icon });
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
    setFormData((prevData) => ({
      ...prevData,
      features: prevData.features.filter((_, i) => i !== index),
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
    const overview = { Text: formData.overview };

    form.append("title", formData.title);
    form.append("overview", JSON.stringify(overview));
    form.append("status", formData.status);
    form.append("price", formData.price);
    form.append("propertyType", formData.propertyTypeIndex + 1);
    form.append("category", formData.propertyCategoryIndex);
    form.append("purpose", formData.purpose);
    form.append("area", formData.area);
    form.append("beds", formData.beds);
    form.append("baths", formData.baths);
    form.append("location", formData.location);
    form.append("features", JSON.stringify(formData.features));
    form.append("keyHighlights", JSON.stringify(formData.keyHighlights));
    form.append("coverImage", formData.coverImage);

    if (formData.galleryImages) {
      formData.galleryImages.forEach((image, index) => {
        form.append(`galleryImages`, image);
      });
    }

    const token = localStorage.getItem("token");

    try {
      const endpoint = isEditing ? `${serverURL}/property/update-property/${location.state.property.id}` : `${serverURL}/property/create-property`;
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

      toast.success(`Property ${isEditing ? "updated" : "added"} successfully!`);
      setFormData(initialFormData);
    } catch (error) {
      toast.error(`Error submitting form`);
      console.error("Error submitting form", error);
    }
  };

  return (
    <div className="mx-auto flex w-[80%] flex-col gap-7 pb-4">
      <Header title={isEditing ? "Edit Property" : "Add Property"} />

      <GeneralInformation
        formData={formData}
        handleChange={handleChange}
        handleSelectChange={handleSelectChange}
        handleFileChange={handleFileChange}
        handleRemoveCoverImage={handleRemoveCoverImage}
      />
      <PropertyInformation formData={formData} handleChange={handleChange} handleSelectChange={handleSelectChange} />
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
      <Gallery formData={formData} handleAddGalleryImage={handleAddGalleryImage} handleDeleteGalleryImage={handleDeleteGalleryImage} />

      <div className="flex items-center justify-end gap-x-3">
        <Button className="rounded-md border-red-700 bg-red-700 hover:border-mirage">Cancel</Button>
        <Button className="rounded-md" onClick={handleSubmit}>
          Submit
        </Button>
      </div>

      {showKeyHighlightModal && (
        <AddKeyHighlightModal
          onClose={() => setShowKeyHighlightModal(false)}
          onSubmit={handleAddHighlight}
          editData={editKeyHighlightIndex !== null ? formData.keyHighlights[editKeyHighlightIndex] : null}
        />
      )}

      {showAmenityModal && (
        <AddAmenityModal
          onClose={() => setShowAmenityModal(false)}
          onSubmit={handleAddAmenity}
          editData={editAmenityIndex !== null ? formData.features[editAmenityIndex] : null}
        />
      )}
    </div>
  );
};

export default AdminAddProperty;
