import { Link } from "react-router-dom";
import { statsData, recentProjects } from "../data";
import { FaArrowRight } from "react-icons/fa";

const Home = () => {
    return (
        <main className="ml-0 md:ml-75 min-h-screen px-8 md:px-16 py-24">
            {/* ── Hero Section ── */}
            <section className="mb-15">
                {/* The big stacked word. */}
                <h1
                    className="font-display text-[60px] md:text-[80px] font-black leading-none uppercase mb-8"
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
                <p className="text-text-muted text-lg max-w-2xl -mt-2 leading-normal">
                    Passionate about building scalable digital products. I turn
                    ideas into clean, functional code and bring intuitive user
                    interfaces to life. Let's create something amazing together!
                </p>
            </section>

            {/* ── Stats Section ── */}
            <section className="mb-15">
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
        </main>
    );
};

export default Home;
