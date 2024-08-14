import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaChevronLeft } from "react-icons/fa";
import Button from "./Button";
import TypeSelectModal from "../adminManageProperty/TypeSelectModal";

const Header = ({ title, showBackButton }) => {
  const [showTypeSelectModal, setShowTypeSelectModal] = useState(false);
  const navigate = useNavigate();

  const handleAddNewClick = () => {
    setShowTypeSelectModal(true);
  };

  return (
    <>
      <div className="flex items-center justify-between rounded-xl border border-lightGrey bg-paleGrey px-6 py-3">
        <div className="flex items-center">
          {showBackButton && (
            <FaChevronLeft
              className="mr-4 cursor-pointer"
              size={20}
              onClick={() => navigate(-1)}
            />
          )}
          <h1 className="font-regular text-[22px]">{title}</h1>
        </div>
        {title === "Manage Properties" && (
          <Button variant="outline" onClick={handleAddNewClick}>
            Add New Property
          </Button>
        )}
      </div>
      {showTypeSelectModal && (
        <TypeSelectModal
          isOpen={showTypeSelectModal}
          setIsOpen={setShowTypeSelectModal}
        />
      )}
    </>
  );
};

export default Header;
