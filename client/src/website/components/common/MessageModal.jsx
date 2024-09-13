import Button from "@/admin/components/common/Button.jsx";

const MessageModal = ({ onClose, message, title, children }) => {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[600]">
        <div className="w-[95%] md:w-[32rem] rounded-xl bg-white">
            <div className="border-b-2 px-6 py-4 space-y-1.5">
                <h1 className="text-[24px]">{title}</h1>
                <div className="">
                    {
                        children ? children : message
                    }
                </div>
            </div>
            <div className="px-6 pb-4 flex justify-end items-center gap-x-6 mt-4">
                <Button onClick={onClose} variant="outline" className={'rounded-lg'}>
              Ok
            </Button>
          </div>
        </div>
      </div>
    );
  };

  export default MessageModal;
  