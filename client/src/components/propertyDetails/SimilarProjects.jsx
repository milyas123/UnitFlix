import ProjectCard from "../landingPage/cards/ProjectCard";

const SimilarProjects = () => {
  return (
    <div className="mt-24">
      <h1 className="font-semibold text-[24px]">
        Similar Projects from Developer
      </h1>
      <div className="mt-5 grid grid-cols-4 gap-4">
        {[1, 2, 3, 4].map((item) => (
          <ProjectCard key={item} />
        ))}
      </div>
    </div>
  );
};

export default SimilarProjects;
