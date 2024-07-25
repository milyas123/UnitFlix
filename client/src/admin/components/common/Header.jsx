import Button from "./Button";

const Header = ({ title }) => {
  return (
    <div className="flex items-center justify-between rounded-xl border border-lightGrey bg-paleGrey px-6 py-3">
      <h1 className="font-regular text-[22px]">{title}</h1>
      {title === "Manage Properties" && (
        <Button variant="outline">Add New Property</Button>
      )}
    </div>
  );
};

export default Header;
