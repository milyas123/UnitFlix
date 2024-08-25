import axios from "axios";
import React, { useState, useEffect } from "react";
import {useNavigate, useSearchParams} from "react-router-dom";

import Filters from "../components/common/Filters";
import Header from "../components/common/Header";
import Table from "../components/common/Table";
import Pagination from "@/website/components/propertiesForSale/Pagination.jsx";

const AdminManageProperties = () => {
  const navigate = useNavigate();
  const serverURL = import.meta.env.VITE_SERVER_URL;

  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams()
  const [pages, setPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

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

  useEffect(() => {
    fetchProperties();
  }, [serverURL]);

  const fetchProperties = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${serverURL}/property/search?${searchParams.toString()}`);
      setProperties(response.data?.data.properties);
      setPages(response.data?.data.pages);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (propertyId) => {
    const token = localStorage.getItem("token");

    try {
      await axios.delete(`${serverURL}/property/${propertyId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      fetchProperties();
    } catch (err) {
      setError(err);
    }
  };

  const handleEdit = (property) => {
    if(property.category === 0) {
      navigate(`/admin/edit-property/${property?.id}`);
    } else if (property.category === 1) {
      navigate(`/admin/edit-project/${property?.id}`);
    }
  };

  const paginate = (pageNumber) => {
    if(pageNumber > 0 && pageNumber <= pages) {
      searchParams.set("page", pageNumber);
      navigate(`/admin/manage-properties?${searchParams.toString()}`);
      navigate(0);
    }
  }

  if (loading)
    return (
      <p className="flex size-full h-60 items-center justify-center">
        Loading...
      </p>
    );
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="space-y-5">
      <div className="flex flex-col gap-y-10">
        <Header title="Manage Properties" />
        <Filters type="properties" totalRecords={properties?.length}/>
      </div>
      <Table
        type="properties"
        data={properties}
        onDelete={handleDelete}
        onEdit={handleEdit}
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
  );
};

export default AdminManageProperties;
