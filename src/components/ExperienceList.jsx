import { experienceData } from "../data";

const ExperienceList = ({ limit }) => {
    const displayedExperience = limit
        ? experienceData.slice(0, 3)
        : experienceData;
    return (
        <div className="flex flex-col gap-6 font-body ">
            {displayedExperience.map((experience) => {
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
    );
};

export default ExperienceList;
