import { useParams } from "react-router-dom";
import { projectsData } from "../data";

const ProjectDetails = () => {
    const { slug } = useParams();

    const project = projectsData.find((proj) => proj.slug === slug);

    if (!project) {
        <div className="ml-0 md:ml-97 px-8 md:px-16 mt-2 md:mt-8 min-h-screen pt-31 pb-24 flex items-center justify-center">
            <h2 className="text-text-muted">Project Not Found.</h2>
        </div>;
    }

    return (
        <main className="ml-0 md:ml-97 px-8 md:px-16 mt-2 md:mt-8 min-h-screen pt-31 pb-24">
            {/* ── Project Title ── */}
            <h1
                className="font-black leading-none uppercase mb-10"
                style={{ fontFamily: "var(--font-display)" }}
            >
                <span className="text-text-primary block text-[50px] md:text-[80px]">{project.title}</span>
                <span
                    className="block text-[20px] md:text-[50px]"
                    style={{
                        WebkitTextStroke: "2px #1E3358",
                        color: "transparent",
                    }}
                >
                    {project.category}
                </span>
            </h1>

            {/* ── Project Image ── */}
            <div className="w-full h-75 md:h-125 rounded-2xl overflow-hidden mb-12">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                />
            </div>

            {/* ── Project Details ── */}
            <div className="flex flex-col md:flex-row gap-12">
                {/* Left — Description */}
                <div className="flex-1">
                    <h2
                        className="text-text-primary text-2xl font-bold mb-4"
                        style={{ fontFamily: "var(--font-display)" }}
                    >
                        About the Project
                    </h2>
                    <p className="text-text-muted leading-relaxed">
                        {project.description}
                    </p>
                </div>

                {/* Right — Meta info */}
                <div className="flex flex-col gap-6 md:w-70">
                    {/* Tags */}
                    <div>
                        <h3 className="text-text-primary font-bold mb-3">
                            Tech Stack
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="px-3 py-1 bg-bg-card border border-border rounded-full text-text-muted text-sm"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Year */}
                    <div>
                        <h3 className="text-text-primary font-bold mb-1">
                            Year
                        </h3>
                        <p className="text-text-muted">{project.year}</p>
                    </div>

                    {/* Links */}
                    <div className="flex flex-col gap-3">
                        <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-accent hover:bg-accent-hover text-white font-bold py-3 px-6 rounded-xl text-center transition-colors duration-300"
                        >
                            Live Site
                        </a>

                        {/* 
                        We only show the GitHub button if
                        githubUrl exists in the data.
                        WordPress projects don't have one.
                    */}
                        {project.githubUrl && (
                            <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="border border-border hover:border-accent text-text-primary font-bold py-3 px-6 rounded-xl text-center transition-colors duration-300"
                            >
                                GitHub Repo
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </main>
    );
};

export default ProjectDetails;
