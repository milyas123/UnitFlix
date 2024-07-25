import { useState } from "react";
import Filters from "../components/common/Filters";
import Header from "../components/common/Header";
import Table from "../components/common/Table";
import TypeSelectModal from "../components/adminManageProperty/TypeSelectModal";

const AdminManageProperties = () => {
  const [showTypeSelectModal, setShowTypeSelectModal] = useState(false);

  return (
    <>
      <div className="space-y-5">
        <div className="flex flex-col gap-y-10">
          <Header title="Manage Properties" />
          <Filters type="properties" />
        </div>

        <Table type="properties" />
      </div>
      {showTypeSelectModal && <TypeSelectModal />}
    </>
  );
};

export default AdminManageProperties;
