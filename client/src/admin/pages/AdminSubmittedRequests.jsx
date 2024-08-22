import axios from "axios";
import { useState, useEffect } from "react";

import Filters from "../components/common/Filters";
import Header from "../components/common/Header";
import Table from "../components/common/Table";
import RequestDetailsModal from "../components/adminSubmittedRequests/RequestDetailsModal";

import { toast } from "react-toastify";
const serverURL = import.meta.env.VITE_SERVER_URL;

const AdminSubmittedRequests = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [requests, setRequests] = useState([]);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [loadingAction, setLoadingAction] = useState({ id: null, type: null });

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

  const handleUpdateStatus = async (requestId, status) => {
    setLoadingAction({ id: requestId, type: status });
    try {
      await axios.put(`${serverURL}/request/${requestId}`, { status },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      toast.success(`Request ${status === 1 ? 'accepted' : 'rejected'} successfully`);
      fetchRequests();
    } catch (err) {
      setError(err);
      toast.error('Failed to update request status');
    } finally {
      setLoadingAction({ id: null, type: null });
    }
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
          data={requests.properties}
          showSubmitterDetails={handleShowDetails}
          onAccept={(requestId) => handleUpdateStatus(requestId, 1)}
          onReject={(requestId) => handleUpdateStatus(requestId, 2)}
          loadingAction={loadingAction}
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
