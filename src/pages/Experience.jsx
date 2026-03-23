import ExperienceList from "../components/ExperienceList";

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

            {/* No limit passed — shows all experience */}
            <ExperienceList />
        </main>
    );
};

export default Experience;
