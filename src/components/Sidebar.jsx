import React from "react";
import { myData } from "../data";
import { FaGithub, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Sidebar = () => {
    const devData = myData;
    return (
        <aside className="fixed top-10 left-10 h-[calc(100vh-80px)] w-70 bg-bg-sidebar border-2 border-border rounded-2xl flex flex-col items-center justify-between py-10 px-6 z-50">
            {/* ── Top Section: Photo + Name + Tagline ── */}
            <div className="flex flex-col items-center text-center gap-4">
                {/* Profile Photo */}
                <div className="w-40 h-40 rounded-xl overflow-hidden border-2 border-accent">
                    <img
                        src={devData.photo}
                        alt={"Photo of " + devData.name}
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Name */}
                <h1
                    className="text-text-primary text-lg font-bold leading-tight"
                    style={{ fontFamily: "var(--font-display)" }}
                >
                    {devData.name}
                </h1>

                {/* Orange divider line */}
                <div className="w-10 h-1 bg-accent rounded-full"></div>

                {/* Tagline */}
                <p className="text-text-muted text-sm leading-relaxed">
                    {devData.tagline}
                </p>
            </div>

            {/* ── Bottom Section: Social Icons ── */}
            <div className="flex items-center gap-4">
                {/* 
          Each social link follows the same pattern:
          - Opens in a new tab (target="_blank")
          - rel="noopener noreferrer" is a security best practice
            when using target="_blank" — it prevents the new page
            from being able to access your page
        */}
                <a
                    href={devData.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub Profile"
                    className="text-text-muted hover:text-accent transition-colors duration-300"
                >
                    <FaGithub size={20} />
                </a>

                <a
                    href={devData.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Twitter Profile"
                    className="text-text-muted hover:text-accent transition-colors duration-300"
                >
                    <FaTwitter size={20} />
                </a>

                <a
                    href={devData.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn Profile"
                    className="text-text-muted hover:text-accent transition-colors duration-300"
                >
                    <FaLinkedinIn size={20} />
                </a>
            </div>
        </aside>
    );
};

export default Sidebar;
