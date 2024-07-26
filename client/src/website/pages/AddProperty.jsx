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
      <div className="mx-auto flex w-[95%] flex-col gap-5 py-2 md:w-[60%] md:gap-3 lg:gap-5 xl:gap-6 2xl:gap-7">
        <div className="rounded-xl bg-white p-3 text-[20px] md:px-4 md:py-2 md:text-[12px] lg:px-6 lg:py-2.5 lg:text-[15px] xl:px-7 xl:py-3 xl:text-[18px] 2xl:px-8 2xl:py-4 2xl:text-[22px]">
          Add Property
        </div>

        <GeneralInformation />
        <UserInformation />
        <PropertyInformation />
        <AddKeyHighlights />
        <AddFeaturesAndAmenities />
        <Gallery />

        <div className="flex items-center justify-end gap-x-3">
          <Button className="rounded-md border-red-700 bg-red-700 hover:border-mirage">
            Cancel
          </Button>
          <Button className="rounded-md" onClick={handleSubmit}>
            Submit
          </Button>
        </div>
      </div>

      {isInfoModalVisible && (
        <InfoModal onClose={handleCloseInfoModal} onNext={handleNext} />
      )}
      {isOTPModalVisible && <VerifyOTPModal onClose={handleCloseOTPModal} />}
    </div>
  );
};

export default AddProperty;
