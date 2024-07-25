import Header from "../components/common/Header";
import Button from "../components/common/Button";
import GeneralInformation from "@/website/components/addProperty/GeneralInformation";
import PropertyInformation from "@/website/components/addProperty/PropertyInformation";
import AddKeyHighlights from "@/website/components/addProperty/AddKeyHighlights";
import AddFeaturesAndAmenities from "@/website/components/addProperty/AddFeaturesAndAmenities";
import Gallery from "@/website/components/addProperty/Gallery";

const AddProperty = () => {
  return (
    <>
      <div className="mx-auto flex w-[80%] flex-col gap-7 pb-4">
        <Header title="Add Property" />

        <GeneralInformation />
        <PropertyInformation />
        <AddKeyHighlights />
        <AddFeaturesAndAmenities />
        <Gallery />

        <div className="flex items-center justify-end gap-x-3">
          <Button className="rounded-md border-red-700 bg-red-700 hover:border-mirage">
            Cancel
          </Button>
          <Button className="rounded-md">Submit</Button>
        </div>
      </div>
    </>
  );
};

export default AddProperty;
