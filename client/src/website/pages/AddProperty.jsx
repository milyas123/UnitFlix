import {useEffect, useState} from "react";
import { Button } from "@/website/components/ui/button";

import GeneralInformation from "@/website/components/addProperty/GeneralInformation";
import UserInformation from "@/website/components/addProperty/UserInformation";
import PropertyInformation from "@/website/components/addProperty/PropertyInformation";
import AddKeyHighlights from "@/website/components/addProperty/AddKeyHighlights";
import AddFeaturesAndAmenities from "@/website/components/addProperty/AddFeaturesAndAmenities";
import Gallery from "@/website/components/addProperty/Gallery";
import AddKeyHighlightModal from "@/admin/components/adminAddProject/modals/AddKeyHighlightModal";
import AddAmenityModal from "@/admin/components/adminAddProject/modals/AddAmenityModal";

import axios from "axios";
import { FaChevronLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import InfoModal from "@/website/components/addProperty/InfoModal";
import VerifyOTPModal from "../components/addProperty/VerifyOTPModal";
import MessageModal from "@/website/components/common/MessageModal.jsx";
import { MdErrorOutline} from "react-icons/md";

const initialFormData = {
  title: "",
  overview: "",
  tags: "",
  status: "",
  price: 0,
  coverImage: "",
  propertyType: 1,
  purpose: 0,
  area: 0,
  beds: 0,
  baths: 0,
  city: "",
  location: 1,
  keyHighlights: [],
  features: [],
  galleryImages: [],
  userDetail: {
    email: "",
    name: "",
    phoneNumber: "",
  },
};

const AddProperty = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState(initialFormData);
  const [isInfoModalVisible, setIsInfoModalVisible] = useState(false);
  const [isOTPModalVisible, setIsOTPModalVisible] = useState(false);
  const [isMessageModalVisible, setIsMessageModalVisible] = useState(false);
  const [propertyData, setPropertyData] = useState({
    propertyId: null,
    email: "",
  });
  const [errors, setErrors] = useState([]);

  const [showKeyHighlightModal, setShowKeyHighlightModal] = useState(false);
  const [editKeyHighlightIndex, setEditKeyHighlightIndex] = useState(null);

  const [showAmenityModal, setShowAmenityModal] = useState(false);
  const [editAmenityIndex, setEditAmenityIndex] = useState(null);

  const serverURL = import.meta.env.VITE_SERVER_URL;

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleStatusChange = (status) => {
    setFormData((prevData) => ({
      ...prevData,
      status: status,
    }));
  }

  const handleUserDetailsChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      userDetail: {
        ...prevData.userDetail,
        [id]: value,
      },
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
    const overview = { text: formData.overview };
    setLoading(true)

    form.append("category", 0);
    form.append("title", formData.title);
    form.append('tags', formData.tags);
    form.append("overview", JSON.stringify(overview));
    form.append("status", formData.status);
    form.append("price", formData.price);
    form.append("propertyType", formData.propertyType);
    form.append("purpose", formData.purpose);
    form.append("area", formData.area);
    form.append("beds", formData.beds);
    form.append("baths", formData.baths);
    form.append("location", formData.location);
    form.append("features", JSON.stringify(formData.features));
    form.append("keyHighlights", JSON.stringify(formData.keyHighlights));
    form.append("coverImage", formData.coverImage);
    form.append("userDetail", JSON.stringify(formData.userDetail));

    if (formData.galleryImages) {
      formData.galleryImages.forEach((image) => {
        form.append(`galleryImages`, image);
      });
    }

    try {
      const response = await axios.post(`${serverURL}/request`, form, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log(response)

      setPropertyData({
        propertyId: response.data?.data.propertyId,
        email: response.data?.data.email,
      });

      setFormData(initialFormData);
      setIsMessageModalVisible(true);
    } catch (error) {
      console.error("Error submitting form", error);
      setErrors(error.response.data.errors || [error.response.data.error]);
      setIsMessageModalVisible(true);
    } finally {
      setLoading(false);
    }
  };

  const onMessageModalClose = () => {

    if(errors.length === 0) {
      setIsInfoModalVisible(true);
    }

    setIsMessageModalVisible(false);
    setErrors([]);
  }

  const handleNext = () => {
    setIsInfoModalVisible(false);
    setIsOTPModalVisible(true);
  };

  const onOtpVerify = () => {
    navigate("/search?page=1");
  }

  return (
    <div className="bg-whiteLilac">
      <div className="mx-auto flex w-[95%] flex-col gap-5 py-2 md:w-[60%] md:gap-3 lg:gap-5 xl:gap-6 2xl:gap-7">
        <div className="flex items-center rounded-xl bg-white p-3 text-[20px] md:px-4 md:py-2 md:text-[12px] lg:px-6 lg:py-2.5 lg:text-[15px] xl:px-7 xl:py-3 xl:text-[18px] 2xl:px-8 2xl:py-4 2xl:text-[22px]">
          <FaChevronLeft
            className="mr-4 cursor-pointer"
            size={20}
            onClick={() => navigate(-1)}
          />
          Add Property
        </div>

        <GeneralInformation
          formData={formData}
          handleChange={handleChange}
          handleSelectChange={handleSelectChange}
          handleFileChange={handleFileChange}
          handleRemoveCoverImage={handleRemoveCoverImage}
          handleStatusClick={handleStatusChange}
        />
        <UserInformation
          formData={formData}
          handleChange={handleUserDetailsChange}
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
          <Button className="rounded-md border-red-700 bg-red-700 hover:border-mirage">
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

      {showKeyHighlightModal && (
        <AddKeyHighlightModal
          onClose={() => setShowKeyHighlightModal(false)}
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
          onClose={() => setShowAmenityModal(false)}
          onSubmit={handleAddAmenity}
          editData={
            editAmenityIndex !== null
              ? formData.features[editAmenityIndex]
              : null
          }
        />
      )}

      {isInfoModalVisible && (
        <InfoModal
          onClose={() => setIsInfoModalVisible(false)}
          onNext={handleNext}
        />
      )}

      {isOTPModalVisible && (
        <VerifyOTPModal
          propertyData={propertyData}
          onClose={() => setIsOTPModalVisible(false)}
          onOtpVerify={onOtpVerify}
        />
      )}

      {
        isMessageModalVisible && (
          <MessageModal title={errors && errors.length > 0 ? `Errors (${errors.length})` : 'Request Submitted Successfully'} onClose={onMessageModalClose}>
            <div className='flex flex-col gap-y-1'>
              {
                errors.map((error, index) => {
                  return (
                      <div className='flex items-center gap-x-2' key={index}>
                        <div className='text-red-500'>
                          <MdErrorOutline />
                        </div>
                        <p className='text-red-500'>
                          {error}
                        </p>
                      </div>
                  )
                })
              }
              {
                errors.length > 0 ?
                    <div className="text-smokeyGrey flex items-center gap-x-2">
                      Please fix the above errors and try again
                    </div> : <></>
              }
              {
                errors.length === 0 ?
                    <div className='flex gap-x-2 text-smokeyGrey'>
                      Request has been captured. Please proceed forward to verify your email via an otp and complete the submission.
                    </div> : <></>
              }
            </div>
          </MessageModal>
          )
      }
    </div>
  );
};

export default AddProperty;
