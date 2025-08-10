import projectImage1 from "../assets/project1.png";
import projectImage2 from "../assets/project2.png";
import projectImage3 from "../assets/project3.png";

const projects = [
  {
    title: "NotesApp",
    image: projectImage1,
    description: "MERN Stack Note Taking App with Google OAuth for privacy",
    hrefGit:"https://github.com/VISHALKANNAN070/NotesApp",
    hrefLive:"https://notes-app-rho-eight.vercel.app/",
  },
  {
    title: "Spark'25",
    image: projectImage2,
    description: "Website for International Conference conducted at my college",
    hrefGit:"https://github.com/ZenithTechSolutions/spark",
    hrefLive:"https://spark-three-orcin.vercel.app/",
  },
  {
    title: "Child Nutrition Tracker",
    image: projectImage3,
    description: "Web Application for Child Nutrition Tracking (MSME Project)",
    hrefGit:"https://github.com/ZenithTechSolutions/Child-Nutrition-Tracker",
    hrefLive:"https://child-nutrition-tracker-flax.vercel.app/",
  },
];

const Projects = () => {
  return (
    <div className="relative min-h-screen flex flex-row justify-center items-center bg-[#1c1c1c]">
      <h2 className="absolute text-[220px] top-0 text-white opacity-20">Projects</h2>
      <div className="flex flex-row gap-20 mt-20">
        {projects.map((project, index) => (
          <div key={index} className="h-[600px] w-[400px] border bg-[#dddddd] rounded-2xl">
            <img src={project.image} alt={project.title} className="filter grayscale rounded-t-2xl" />
            <div className="p-4 text-2xl font-light text-center flex flex-col gap-10">
              <h3 className="">{project.title}</h3>
              <p className="">{project.description}</p>
              <div className="flex justify-between px-10">
                <a href={project.hrefGit} target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href={project.hrefLive} target="_blank" rel="noopener noreferrer">Live Site</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
