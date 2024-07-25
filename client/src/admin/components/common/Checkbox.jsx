import Check from "../svgs/Check";

const Checkbox = ({ checked, onChange }) => {
  return (
    <div>
      <div
        className="flex size-6 cursor-pointer items-center justify-center rounded-full border-2 border-gray-500"
        onClick={onChange}
      >
        {checked && <Check />}
      </div>
    </div>
  );
};

export default Checkbox;
