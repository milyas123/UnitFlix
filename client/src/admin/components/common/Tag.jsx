const tagStyles = {
  property: "text-[#1B68DC] bg-[#1B68DC]/15",
  rental: "text-[#4020C0] bg-[#4020C0]/15",
  secondary: "text-[#444242] bg-[#444242]/15",
  project: "text-[#1ECA8C] bg-[#1ECA8C]/15",
  sale: "text-[#E06F07] bg-[#E06F07]/15",
  primary: "text-[#20c4b4] bg-[#20c4b4]/15",
  pending: "text-[#E7B70E] bg-[#E7B70E]/10",
  accepted: "text-[#1ECA8C] bg-[#1ECA8C]/10",
  rejected: "text-[#990F02] bg-[#990F02]/10",
  default: "text-[#000000] bg-[#E1E4E5]/45"
};

const Tag = ({ type }) => {
  const style = tagStyles[type] || tagStyles.default;

  return (
    <span className={`inline-block rounded-full px-4 py-1 font-regular text-[13px] capitalize ${style}`}>
      {type}
    </span>
  );
};

export default Tag;
