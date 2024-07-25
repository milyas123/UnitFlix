import { useState } from "react";
import Check from "../svgs/Check";

const Checkbox = () => {
  const [checked, setChecked] = useState(false);

  return (
    <div>
      <div
        className="flex size-6 cursor-pointer items-center justify-center rounded-full border-2 border-gray-500"
        onClick={() => setChecked(!checked)}
      >
        {checked && <Check />}
      </div>
    </div>
  );
};

export default Checkbox;
