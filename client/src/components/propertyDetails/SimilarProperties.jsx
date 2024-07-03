import PropertyCard from "../propertiesForSale/PropertyCard";

const SimilarProperties = () => {
  return (
    <div className="my-48">
      <h1 className="font-semibold text-[24px]">Similar Properties in Area</h1>
      <div className="mt-5 grid grid-cols-4 gap-4">
        {[1, 2, 3, 4].map((item) => (
          <PropertyCard key={item} />
        ))}
      </div>
    </div>
  );
};

export default SimilarProperties;
