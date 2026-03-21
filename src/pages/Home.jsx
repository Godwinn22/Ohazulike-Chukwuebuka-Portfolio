import { Link } from "react-router-dom";
import { statsData, recentProjects } from "../data";
import { FiArrowUpRight } from "react-icons/fi"; // Feather Icons

const Home = () => {
    return (
        <main className="ml-0 md:ml-97 mt-2 md:mt-8 min-h-screen px-8 md:px-16 py-24">
            {/* ── Hero Section ── */}
            <section className="mb-15">
                {/* The big stacked word. */}
                <h1
                    className="font-display text-[50px] md:text-[80px] font-black leading-none uppercase mb-8"
                    style={{ fontFamily: "var(--font-display)" }}
                >
                    <span className="text-text-primary block">Software</span>
                    <span
                        className="block"
                        style={{
                            WebkitTextStroke: "3px #1E3358",
                            color: "transparent",
                        }}
                    >
                        Engineer
                    </span>
                </h1>
                {/* The description and the button. */}
                <p className="text-text-muted text-sm md:text-lg max-w-2xl -mt-2 leading-normal">
                    Passionate about building scalable digital products. I turn
                    ideas into clean, functional code and bring intuitive user
                    interfaces to life. Let's create something amazing together!
                </p>
            </section>

            {/* ── Stats Section ── */}
            <section className="mb-25">
                <div className="flex flex-wrap gap-12">
                    {statsData.map((stat) => {
                        return (
                            <div key={stat.number}>
                                {/* The big number */}
                                <p className="text-text-primary text-5xl font-medium mb-1">
                                    {stat.number}
                                </p>
                                <p className="text-text-muted text-sm font-bold tracking-widest whitespace-pre-line md:whitespace-normal">
                                    {stat.label}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* ── Recent Projects Section ── */}
            <section className="mb-25">
                {/* Section heading — same stacked style */}
                <h1
                    className="font-display text-[60px] md:text-[80px] font-black leading-none uppercase mb-8"
                    style={{ fontFamily: "var(--font-display)" }}
                >
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
                {/* Project list */}
                <div className="flex flex-col">
                    {recentProjects.map((project) => {
                        return (
                            <div
                                key={project.id}
                                className="flex items-center gap-6 py-6 border-b border-border group cursor-pointer"
                            >
                                {/* Project thumbnail */}
                                <div className="w-35 md:w-50 h-17 md:h-30 rounded-lg overflow-hidden shrink-0">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover"
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
                                    className="text-text-primary group-hover:text-accent group-hover:translate-x-2 transition-all duration-300"
                                    size={16}
                                />
                            </div>
                        );
                    })}
                </div>
                {/* View all projects link */}
                <div className="mt-10">
                    <Link
                        to="/projects"
                        className="inline-flex items-center gap-4 text-accent font-medium hover:gap-5 transition-all duration-300"
                    >
                        View all projects
                        <FiArrowUpRight size={14} />
                    </Link>
                </div>
            </section>
        </main>
    );
};

export default Home;
