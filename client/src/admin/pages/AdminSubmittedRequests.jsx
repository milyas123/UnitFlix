import { useState } from "react";
import Filters from "../components/common/Filters";
import Header from "../components/common/Header";
import Table from "../components/common/Table";
import RequestDetailsModal from "../components/adminSubmittedRequests/RequestDetailsModal";

const AdminSubmittedRequests = () => {
  const [showDetailsModal, setShowDetailsModal] = useState(false);

  return (
    <>
      <div className="space-y-5">
        <div className="flex flex-col gap-y-10">
          <Header title="Submitted Requests" />
          <Filters type="requests" />
        </div>

        <Table
          type="requests"
          showSubmitterDetails={showDetailsModal}
          setShowSubmitterDetails={setShowDetailsModal}
        />
      </div>

      {showDetailsModal && (
        <RequestDetailsModal onClose={() => setShowDetailsModal(false)} />
      )}
    </>
  );
};

export default AdminSubmittedRequests;
