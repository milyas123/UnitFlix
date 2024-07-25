import Filters from "../components/common/Filters";
import Header from "../components/common/Header";
import Table from "../components/common/Table";

const AdminManageProperties = () => {

  return (
    <>
      <div className="space-y-5">
        <div className="flex flex-col gap-y-10">
          <Header title="Manage Properties" />
          <Filters type="properties" />
        </div>

        <Table type="properties" />
      </div>
    </>
  );
};

export default AdminManageProperties;
