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
    <div className="mt-12">
      <h1 className="font-semibold text-[24px] mb-4">Key Highlights</h1>
      <div className="flex flex-wrap gap-4">
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
