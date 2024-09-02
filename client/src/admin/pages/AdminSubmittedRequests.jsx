import axios from "axios";
import React, {useState, useEffect, useRef} from "react";

import Filters from "../components/common/Filters";
import Header from "../components/common/Header";
import Table from "../components/common/Table";
import RequestDetailsModal from "../components/adminSubmittedRequests/RequestDetailsModal";

import { toast } from "react-toastify";
import {useNavigate, useSearchParams} from "react-router-dom";
import Pagination from "@/website/components/propertiesForSale/Pagination.jsx";
import ReasonMessageModal from "@/admin/components/adminSubmittedRequests/ReasonMessageModal.jsx";
const serverURL = import.meta.env.VITE_SERVER_URL;

const AdminSubmittedRequests = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [requests, setRequests] = useState([]);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [loadingAction, setLoadingAction] = useState({ id: null, type: null });
  const [isRejectionMessageModalShown, setIsRejectionMessageModalShown] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams()
  const [pages, setPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const requestToReject = useRef(-1);

  useEffect(() => {
    fetchRequests();
  }, []);

  useEffect(() => {
    if(searchParams) {
      const page = searchParams.get("page");
      if(page) {
        setCurrentPage(parseInt(page));
      } else {
        setCurrentPage(1);
      }
    }
  }, [searchParams]);

  const fetchRequests = async () => {
    const token = localStorage.getItem("token");

    try {
      const response = await axios.get(`${serverURL}/request?${searchParams.toString()}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setPages(response.data?.data.pages);
      setRequests(response.data?.data.properties);
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

  const handleUpdateStatus = async (requestId, status, message) => {
    setLoadingAction({ id: requestId, type: status });
    try {
      await axios.put(`${serverURL}/request/${requestId}`, { status, message },
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

  const onRejectRequest = (requestId) => {
    requestToReject.current = requestId;
    setIsRejectionMessageModalShown(true);
  }

  const paginate = (pageNumber) => {
    if(pageNumber > 0 && pageNumber <= pages) {
      searchParams.set("page", pageNumber);
      navigate(`/admin/manage-properties?${searchParams.toString()}`);
      navigate(0);
    }
  }

  const submitRejectionMessageModal = async (message) => {
    if(!loadingAction.type) {
      await handleUpdateStatus(requestToReject.current, 2, message);
      setIsRejectionMessageModalShown(false);
    }
  }

  const closeRejectionMessageModal = () => {
    setIsRejectionMessageModalShown(false);
    requestToReject.current = -1;
  }

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
          onAccept={(requestId) => handleUpdateStatus(requestId, 1)}
          onReject={(requestId) => onRejectRequest(requestId)}
          loadingAction={loadingAction}
        />
        {pages > 1 && (
            <div className="mt-16">
              <Pagination totalPages={pages}
                          currentPage={currentPage}
                          paginate={paginate}
              />
            </div>
        )}
      </div>

      {
        isRejectionMessageModalShown ?
            <ReasonMessageModal onClose={closeRejectionMessageModal}
                                onSubmit={submitRejectionMessageModal}
                                loadingAction={loadingAction}/> : <></>
      }

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
