import { Link } from "react-router-dom";
import { projectsData } from "../data/index.js";
import { FiArrowUpRight } from "react-icons/fi";

const Projects = () => {
    return (
        <main className="ml-0 md:ml-90 px-8 md:px-16 mt-2 md:mt-8 min-h-screen pt-31 pb-24">
            <h1 className="font-display text-[60px] md:text-[80px] font-black leading-none uppercase mb-8">
                <span className="text-text-primary block">Recent</span>
                <span
                    className="block"
                    style={{
                        WebkitTextStroke: "3px #1E3358",
                        color: "transparent",
                    }}
                >
                    Projects
                </span>
            </h1>

            {/* The project list */}
            <div className="flex flex-col">
                {projectsData.map((project) => {
                    return (
                        <Link
                            to={`/projects/${project.slug}`}
							key={project.id}
                            className="flex items-center gap-6 border-b border-border py-6 group cursor-pointer"
                        >
                            {/* Projects thumbnail */}
                            <div className="w-35 md:w-50 h-17 md:h-30 rounded-lg overflow-hidden">
                                <img
                                    src={project.images[0]} // Show the first image as thumbnail
                                    alt={project.title}
                                    className="w-full h-full object-cover"
                                    loading="lazy"
                                />
                            </div>
                            {/* Project info */}
                            <div className="flex-1">
                                <h3 className="text-text-primary text-xs md:text-lg font-bold font-display">
                                    {project.title}
                                </h3>
                                <p className="text-text-muted text-sm">
                                    {project.category}
                                </p>
                            </div>
							{/* Arrow icon */}
							<FiArrowUpRight 
							className="text-text-muted group-hover:text-accent group-hover:translate-x-2 transition-all duration-300"/>
                        </Link>
                    );
                })}
            </div>
        </main>
    );
};

export default Projects;
