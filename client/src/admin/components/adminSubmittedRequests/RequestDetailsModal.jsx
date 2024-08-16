import Cross from "../svgs/Cross";
import Tag from "../common/Tag";
import Button from "../common/Button";
import { formatCurrency } from "@/lib/utils";

const RequestDetailsModal = ({ request, onClose }) => {
  return (
    <>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex w-[40rem] flex-col gap-y-5 rounded-3xl bg-white p-5">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-x-2.5">
              <img
                src={request?.files.find((file) => file.purpose === 0)?.url}
                className="h-[48px] w-[50px] rounded-2xl object-cover"
                alt=""
              />

              <div>
                <p className="font-regular text-[20px]">{request?.title}</p>
                <p className="space-x-1 divide-x divide-black text-[14px]">
                  <span>2BHK</span> <span className="ps-1">Vacant</span>
                  <span className="ps-1">Study Room</span>
                </p>
              </div>
            </div>

            <div onClick={onClose}>
              <Cross className="cursor-pointer" />
            </div>
          </div>

          <div className="flex items-center justify-between border-y border-pastelGrey py-6">
            <div className="space-y-2">
              <p className="text-[14px] text-davyGrey">Type</p>
              <p className="text-[16px] font-medium">{request?.type?.name}</p>
            </div>
            <div className="space-y-2">
              <p className="text-[14px] text-davyGrey">Location</p>
              <p className="text-[16px] font-medium">
                {request?.propertyLocation?.name}
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-[14px] text-davyGrey">Amount</p>
              <p className="text-[16px] font-medium">
                {formatCurrency(request?.price)}
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-[14px] text-davyGrey">Status</p>
              <p className="text-[16px] font-medium">
                <Tag type={request?.status?.toLowerCase()} />
              </p>
            </div>
          </div>

          <div className="flex items-center justify-between border-b border-pastelGrey pb-6">
            <div className="space-y-2">
              <p className="text-[14px] text-davyGrey">Name</p>
              <p className="text-[16px] font-medium">
                {request?.userDetail?.name}
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-[14px] text-davyGrey">Email</p>
              <p className="text-[16px] font-medium">
                {request?.userDetail?.email}
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-[14px] text-davyGrey">Phone#</p>
              <p className="text-[16px] font-medium">
                {request?.userDetail?.phoneNumber}
              </p>
            </div>
          </div>

          <Button
            variant="filled"
            className="ms-auto rounded-lg"
            onClick={onClose}
          >
            Close
          </Button>
        </div>
      </div>
    </>
  );
};

export default RequestDetailsModal;
