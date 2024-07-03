import PropertyCard from "../propertiesForSale/PropertyCard";

const SimilarProperties = () => {
  return (
    <div className="my-48">
      <h1 className="font-semibold text-[24px]">Similar Properties in Area</h1>
      <div className="mt-5 flex justify-between">
        {[1, 2, 3].map((item) => (
          <PropertyCard key={item} />
        ))}
      </div>
    </div>
  );
};

export default SimilarProperties;
