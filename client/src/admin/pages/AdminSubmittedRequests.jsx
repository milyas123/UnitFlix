import axios from "axios";
import { useState, useEffect } from "react";

import Filters from "../components/common/Filters";
import Header from "../components/common/Header";
import Table from "../components/common/Table";
import RequestDetailsModal from "../components/adminSubmittedRequests/RequestDetailsModal";

const serverURL = import.meta.env.VITE_SERVER_URL;

const AdminSubmittedRequests = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [requests, setRequests] = useState([]);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [selectedRequest, setSelectedRequest] = useState(null);

  useEffect(() => {
    fetchRequests();
  }, []);

  const fetchRequests = async () => {
    const token = localStorage.getItem("token");

    try {
      const response = await axios.get(`${serverURL}/request`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setRequests(response.data?.data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  const handleShowDetails = (request) => {
    setSelectedRequest(request);
    setShowDetailsModal(true);
  };

  if (loading)
    return (
      <p className="flex size-full h-60 items-center justify-center">
        Loading...
      </p>
    );

  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      <div className="space-y-5">
        <div className="flex flex-col gap-y-10">
          <Header title="Submitted Requests" />
          <Filters type="requests" totalRecords={requests?.length} />
        </div>

        <Table
          type="requests"
          data={requests}
          showSubmitterDetails={handleShowDetails}
        />
      </div>

      {showDetailsModal && (
        <RequestDetailsModal
          request={selectedRequest}
          onClose={() => setShowDetailsModal(false)}
        />
      )}
    </>
  );
};

export default AdminSubmittedRequests;
