import { useState } from "react";
import { Button } from "@/website/components/ui/button";
import GeneralInformation from "@/website/components/addProperty/GeneralInformation";
import UserInformation from "@/website/components/addProperty/UserInformation";
import PropertyInformation from "@/website/components/addProperty/PropertyInformation";
import AddKeyHighlights from "@/website/components/addProperty/AddKeyHighlights";
import AddFeaturesAndAmenities from "@/website/components/addProperty/AddFeaturesAndAmenities";
import Gallery from "@/website/components/addProperty/Gallery";
import InfoModal from "@/website/components/addProperty/InfoModal";
import VerifyOTPModal from "@/website/components/addProperty/VerifyOTPModal";

const AddProperty = () => {
  const [isInfoModalVisible, setIsInfoModalVisible] = useState(false);
  const [isOTPModalVisible, setIsOTPModalVisible] = useState(false);

  const handleSubmit = () => {
    setIsInfoModalVisible(true);
  };

  const handleCloseInfoModal = () => {
    setIsInfoModalVisible(false);
  };

  const handleNext = () => {
    setIsInfoModalVisible(false);
    setIsOTPModalVisible(true);
  };

  const handleCloseOTPModal = () => {
    setIsOTPModalVisible(false);
  };

  return (
    <div className="bg-whiteLilac">
      <div className="w-[50%] mx-auto py-4 flex flex-col gap-7">
        <div className="rounded-xl bg-white px-8 py-4 text-[22px]">
          Add Property
        </div>

        <GeneralInformation />
        <UserInformation />
        <PropertyInformation />
        <AddKeyHighlights />
        <AddFeaturesAndAmenities />
        <Gallery />

        <div className="flex justify-end items-center gap-x-3">
          <Button className="rounded-md bg-red-700 border-red-700 hover:border-mirage">
            Cancel
          </Button>
          <Button className="rounded-md" onClick={handleSubmit}>
            Submit
          </Button>
        </div>
      </div>

      {isInfoModalVisible && <InfoModal onClose={handleCloseInfoModal} onNext={handleNext} />}
      {isOTPModalVisible && <VerifyOTPModal onClose={handleCloseOTPModal} />}
    </div>
  );
};

export default AddProperty;
