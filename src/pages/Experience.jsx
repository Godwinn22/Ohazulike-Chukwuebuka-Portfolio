import { experienceData } from "../data";

const Experience = () => {
    return (
        <main className="ml-0 md:ml-90 mt-2 md:mt-8 min-h-screen px-8 md:px-16 pt-31 pb-24">
            <h1 className="font-display text-[50px] md:text-[80px] font-black leading-none uppercase mb-8">
                <span className="text-text-primary block">3 Years of</span>
                <span
                    className="block"
                    style={{
                        WebkitTextStroke: "3px #1E3358",
                        color: "transparent",
                    }}
                >
                    Experience
                </span>
            </h1>

            <div className="flex flex-col gap-6 font-body ">
                {experienceData.slice(0, 3).map((experience) => {
                    return (
                        <div
                            key={experience.id}
                            className="relative flex flex-col border-border pl-8 border-l-2 pb-4 "
                        >
                            {/* Orange dot */}
                            <div className="absolute -left-2.25 top-0 w-4 h-4 rounded-full bg-accent border-2 border-bg"></div>
                            <h3 className="text-text-primary text-2xl font-bold">
                                {experience.company}
                            </h3>
                            <p className="text-text-muted text-lg font-medium">
                                {experience.role}
                            </p>
                            <p className="text-text-muted text-sm font-medium">
                                {experience.period}
                            </p>
                            <p className="text-text-muted text-sm mb-4 max-w-2xl">
                                {experience.description}
                            </p>
                            <p className="mb-3">
                                {experience.tags.map((tag) => {
                                    return (
                                        <span
                                            key={tag}
                                            className="text-text-muted text-xs font-medium mr-2 px-2 py-1 border border-border rounded hover:bg-border transition-colors"
                                        >
                                            {tag}
                                        </span>
                                    );
                                })}
                            </p>
                        </div>
                    );
                })}
            </div>
        </main>
    );
};

export default Experience;
