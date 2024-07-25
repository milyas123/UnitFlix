import Filters from "../components/common/Filters";
import Header from "../components/common/Header";
import Table from "../components/common/Table";

const AdminSubmittedRequests = () => {
  return (
    <div className="space-y-5">
      <div className="flex flex-col gap-y-10">
        <Header title="Submitted Requests" />
        <Filters type="requests" />
      </div>

      <Table type="requests" />
    </div>
  );
};

export default AdminSubmittedRequests;
