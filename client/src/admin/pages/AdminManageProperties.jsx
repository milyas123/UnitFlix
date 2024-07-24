import Button from "../components/common/Button";
import Filters from "../components/common/Filters";

const AdminManageProperties = () => {
  return (
    <>
      <div className="flex flex-col gap-y-10">
        <div className="bg-paleGrey flex items-center justify-between rounded-xl border border-lightGrey px-5 py-3">
          <h1 className="font-regular text-[22px]">Manage Properties</h1>
          <Button variant="outline">Add New Property</Button>
        </div>
        <Filters />
      </div>

      <div>
        <table className="w-full table-auto whitespace-nowrap">
          <thead className="text-dustGray">
            <tr className="text-center font-regular text-[14px]">
              <th className="">No</th>
              <th className="">Property</th>
              <th className="">Location</th>
              <th className="">Date Added</th>
              <th className="">Featured</th>
              <th className="">Tags</th>
              <th className="">Amount</th>
              <th className="">Action</th>
            </tr>
          </thead>
          <tbody className="text-dustGray">
            <tr className="border-b-2 px-4 py-3 text-center hover:bg-gray-100">
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AdminManageProperties;
