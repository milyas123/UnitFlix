import HighlightCard from "./HighlightCard";

const highlights = [
  {
    title: "Features",
    description:
      "Features meticulously crafted studios, 1, 2 & 3 bedroom apartments, as well as exclusive 3-bedroom pool villas and 4-bedroom royal penthouses with private pools.",
  },
  {
    title: "Location",
    description:
      "Strategically situated in Business Bay along Marasi Drive, offering stunning panoramic views of the Dubai skyline, including the Burj Khalifa, Dubai Canal, and Dubai Creek.",
  },
  {
    title: "Landmarks",
    description:
      "Located near the cultural landmarks like Dubai Opera, art galleries, and festival venues, providing residents with easy access to a rich array of cultural and recreational activities.",
  },
  {
    title: "Design Characteristics",
    description:
      "Contemporary design characterized by crystalline glass façades and brass finishes, with floor-to-ceiling glass panels allow for abundant natural light.",
  },
  {
    title: "Technology",
    description:
      "Fully equipped with advance smart home features and AI driven technologies, enhancing the convenience and efficiency of everyday living.",
  },
  {
    title: "Facilities",
    description:
      "Offers a wide range of luxury wellness and leisure facilities, including fitness centres, luxury spas, swimming pool, and yoga zones, outdoor seating areas, BBQ spaces and much more.",
  },
];

const Highlights = () => {
  return (
    <div className="mt-4 md:mt-7 lg:mt-8 xl:mt-10 2xl:mt-12">
      <h1 className="mb-4 text-[24px] font-medium md:mb-2 md:text-[12px] lg:mb-3 lg:text-[15px] xl:text-[18px] 2xl:mb-4 2xl:text-[24px]">
        Key Highlights
      </h1>
      <div className="flex flex-wrap justify-center gap-4 md:justify-start md:gap-2 lg:gap-2.5 xl:gap-3 2xl:gap-4">
        {highlights.map((highlight, index) => (
          <HighlightCard
            key={index}
            title={highlight.title}
            description={highlight.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Highlights;
