import axios from "axios";
import { useState, useEffect } from "react";
import {useNavigate, useSearchParams} from "react-router-dom";

import Filters from "../components/common/Filters";
import Header from "../components/common/Header";
import Table from "../components/common/Table";
import moment from "moment/moment.js";

const AdminManageProperties = () => {
  const navigate = useNavigate();
  const serverURL = import.meta.env.VITE_SERVER_URL;

  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams()

  useEffect(() => {
    fetchProperties();
  }, [serverURL]);

  const fetchProperties = async () => {
    try {
      const response = await axios.get(`${serverURL}/property/search?${searchParams.toString()}`);
      setProperties(response.data?.data.properties);
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
    </div>
  );
};

export default AdminManageProperties;
