import { Link } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { fadeUp } from "../utils/animations";
import ExperienceList from "../components/ExperienceList";
import { statsData, projectsData } from "../data";
import { FiArrowUpRight } from "react-icons/fi"; // Feather Icons
import TechStackList from "../components/TechStackList";
import { myData } from "../data";

const Home = () => {
    return (
        <motion.main className="ml-0 lg:ml-90 mt-2 md:mt-8 min-h-screen px-8 md:px-16 pt-31 pb-24">

            {/* Mobile only profile card */}
            <div className="flex lg:hidden flex-col items-center text-center gap-3 mb-12 p-6 bg-bg-sidebar border border-border rounded-3xl">
                <div className="w-40 h-40 rounded-2xl overflow-hidden border-2 border-accent">
                    <img
                        src={myData.photo}
                        alt={"Photo of " + myData.name}
                        className="w-full h-full object-cover"
                    />
                </div>

                <h2
                    className="text-text-primary text-lg font-bold"
                    style={{ fontFamily: "var(--font-display)" }}
                >
                    {myData.name}
                </h2>

                <div className="w-8 h-0.5 bg-accent rounded-full"></div>

                {/* <p className="text-text-muted text-sm leading-relaxed">
                    {myData.tagline}
                </p> */}
            </div>

            {/* ── Hero Section ── */}
            <motion.section
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="mb-25"
            >
                {/* The big stacked word. */}
                <h1
                    className="font-display text-[35px] md:text-[70px] font-black leading-none uppercase mb-8"
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
                <p className="text-text-muted text-sm md:text-lg max-w-2xl -mt- leading-normal">
                    Passionate about building scalable digital products. I turn
                    ideas into clean, functional code and bring intuitive user
                    interfaces to life. Let's create something amazing together!
                </p>

                <div className="flex flex-wrap gap-12 mt-14">
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
            </motion.section>

            {/* ── Recent Projects Section ── */}
            <motion.section
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="mb-25"
            >
                {/* Section heading — same stacked style */}
                <h1
                    className="font-display text-[35px] md:text-[70px] font-black leading-none uppercase mb-8"
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
                    {projectsData.slice(0, 3).map((project) => {
                        return (
                            <Link
                                to={`/projects/${project.slug}`}
                                key={project.id}
                                className="flex items-center gap-6 py-6 border-b border-border group cursor-pointer"
                            >
                                {/* Project thumbnail */}
                                <div className="w-35 md:w-50 h-17 md:h-30 rounded-lg overflow-hidden shrink-0">
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
                                    className="text-text-primary group-hover:text-accent group-hover:translate-x-2 transition-all duration-300"
                                    size={16}
                                />
                            </Link>
                        );
                    })}
                </div>

                {/* View all projects link */}
                <div className="mt-10">
                    <Link
                        to="/projects"
                        className="inline-flex items-center gap-4 text-accent font-medium hover:gap-5 transition-all duration-300"
                    >
                        View All Projects
                        <FiArrowUpRight size={14} />
                    </Link>
                </div>
            </motion.section>

            {/* ── Experience Section ── */}
            <motion.section
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="mb-25"
            >
                <h2
                    className="text-[35px] md:text-[70px] font-black leading-none uppercase mb-12"
                    style={{ fontFamily: "var(--font-display)" }}
                >
                    <span className="text-text-primary block">3+ Years of</span>
                    <span
                        className="block"
                        style={{
                            WebkitTextStroke: "3px #1E3358",
                            color: "transparent",
                        }}
                    >
                        Experience
                    </span>
                </h2>
                <ExperienceList limit={3} />
                <div className="mt-10">
                    <Link
                        to="/experience"
                        className="inline-flex items-center gap-3 text-accent font-medium hover:gap-5 transition-all duration-300"
                    >
                        View Full experience
                        <FiArrowUpRight size={14} />
                    </Link>
                </div>
            </motion.section>

            {/* ── TechStack Section ── */}
            <motion.section
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                <h2
                    className="text-[35px] md:text-[70px] font-black leading-none uppercase mb-12"
                    style={{ fontFamily: "var(--font-display)" }}
                >
                    <span className="text-text-primary block">Tech</span>
                    <span
                        className="block"
                        style={{
                            WebkitTextStroke: "3px #1E3358",
                            color: "transparent",
                        }}
                    >
                        Stack
                    </span>
                </h2>
                <TechStackList limit={6} />
                <div className="mt-10">
                    <Link
                        to="/experience"
                        className="inline-flex items-center gap-3 text-accent font-medium hover:gap-5 transition-all duration-300"
                    >
                        View Full Tech Stack
                        <FiArrowUpRight size={14} />
                    </Link>
                </div>
            </motion.section>
        </motion.main>
    );
};

export default Home;
