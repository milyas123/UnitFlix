import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import Filters from "../components/common/Filters";
import Header from "../components/common/Header";
import Table from "../components/common/Table";

const AdminManageProperties = () => {
  const navigate = useNavigate();
  const serverURL = import.meta.env.VITE_SERVER_URL;

  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProperties();
  }, [serverURL]);

  const fetchProperties = async () => {
    try {
      const response = await axios.get(`${serverURL}/property/all`);
      setProperties(response.data?.data);
      console.log(response.data.data)
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
    navigate("/admin/add-property", { state: { property } });
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="space-y-5">
      <div className="flex flex-col gap-y-10">
        <Header title="Manage Properties" />
        <Filters type="properties" />
      </div>
      <Table type="properties" data={properties} onDelete={handleDelete} onEdit={handleEdit} />
    </div>
  );
};

export default AdminManageProperties;
