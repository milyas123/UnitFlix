const InfoModal = ({ onClose, onNext }) => {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="w-[32rem] rounded-xl bg-white">
          <div className="border-b-2 px-6 py-4 space-y-1.5">
            <h1 className="text-[24px] font-semibold">Information</h1>
            <p className="text-[16px]">
              An OTP code has been sent to your email. Verify to submit the
              property request.
            </p>
          </div>
  
          <div className="px-6 pb-4 flex justify-end items-center gap-x-6 mt-4">
            <button className="hover:text-mirage" onClick={onClose}>
              Cancel
            </button>
            <button className="hover:text-mirage" onClick={onNext}>
              Next
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default InfoModal;
  