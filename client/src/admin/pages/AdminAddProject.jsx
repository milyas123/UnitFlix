import Header from "../components/common/Header";
import Button from "../components/common/Button";
import ProjectGeneralInformation from "../components/adminAddProject/ProjectGeneralInformation";
import ProjectKeyHighlights from "../components/adminAddProject/ProjectKeyHighlights";
import ProjectFeaturesAndAmenities from "../components/adminAddProject/ProjectFeaturesAndAmenities";
import ProjectGallery from "../components/adminAddProject/ProjectGallery";
import ProjectPropertyInformation from "../components/adminAddProject/ProjectPropertyInformation";
import ProjectPropertyDetails from "../components/adminAddProject/ProjectPropertyDetails";
import ProjectPaymentPlan from "../components/adminAddProject/ProjectPaymentPlan";

const AdminAddProject = () => {
  return (
    <>
      <div className="mx-auto flex w-[80%] flex-col gap-7 pb-4">
        <Header title="Add Project" />

        <ProjectGeneralInformation />
        <ProjectPropertyInformation />
        <ProjectPropertyDetails />
        <ProjectKeyHighlights />
        <ProjectFeaturesAndAmenities />
        <ProjectPaymentPlan />
        <ProjectGallery />


        <div className="flex items-center justify-end gap-x-3">
          <Button className="rounded-md border-red-700 bg-red-700 hover:border-mirage">
            Cancel
          </Button>
          <Button className="rounded-md">Submit</Button>
        </div>
      </div>

    </>
  )
}

export default AdminAddProject