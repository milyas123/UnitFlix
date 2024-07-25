import { useState } from "react";
import Button from "./Button";
import TypeSelectModal from "../adminManageProperty/TypeSelectModal";

const Header = ({ title }) => {
  const [showTypeSelectModal, setShowTypeSelectModal] = useState(false);

  const handleAddNewClick = () => {
    setShowTypeSelectModal(true);
  };

  return (
    <>
      <div className="flex items-center justify-between rounded-xl border border-lightGrey bg-paleGrey px-6 py-3">
        <h1 className="font-regular text-[22px]">{title}</h1>
        {title === "Manage Properties" && (
          <Button variant="outline" onClick={handleAddNewClick}>
            Add New
          </Button>
        )}
      </div>
      {showTypeSelectModal && <TypeSelectModal isOpen={showTypeSelectModal} setIsOpen={setShowTypeSelectModal} />}
    </>
  );
};

export default Header;
