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

const AdminAddProject = () => {
  const [showAddAmenityModal, setShowAddAmenityModal] = useState(false);
  const [showAddPaymentPlanModal, setShowAddPaymentPlanModal] = useState(false);
  const [showAddPropertyItemModal, setShowAddPropertyItemModal] = useState(false);
  const [showAddKeyHighlightModal, setShowAddKeyHighlightModal] = useState(false);

  return (
    <>
      <div className="mx-auto flex w-[80%] flex-col gap-7 pb-4">
        <Header title="Add Project" />

        <ProjectGeneralInformation />
        <ProjectPropertyInformation showModal={setShowAddPropertyItemModal} />
        <ProjectPropertyDetails />
        <ProjectKeyHighlights showModal={setShowAddKeyHighlightModal} />
        <ProjectFeaturesAndAmenities showModal={setShowAddAmenityModal} />
        <ProjectPaymentPlan showModal={setShowAddPaymentPlanModal} />
        <ProjectGallery />

        <div className="flex items-center justify-end gap-x-3">
          <Button className="rounded-md border-red-700 bg-red-700 hover:border-mirage">
            Cancel
          </Button>
          <Button className="rounded-md">Submit</Button>
        </div>
      </div>
      {showAddPropertyItemModal && (
        <AddPropertyItemModal
          onClose={() => setShowAddPropertyItemModal(false)}
        />
      )}

      {showAddKeyHighlightModal && (
        <AddKeyHighlightModal
          onClose={() => setShowAddKeyHighlightModal(false)}
        />
      )}

      {showAddAmenityModal && (
        <AddAmenityModal onClose={() => setShowAddAmenityModal(false)} />
      )}

      {showAddPaymentPlanModal && (
        <AddPaymentPlanModal
          onClose={() => setShowAddPaymentPlanModal(false)}
        />
      )}
    </>
  );
};

export default AdminAddProject;
