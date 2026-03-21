import { myData } from "../data";
import { FaGithub, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
    const dev = myData;
    // We get the current year dynamically so we never
    // have to manually update the copyright year

    const currentYear = new Date().getFullYear();
    return (
        <footer className="px-8 md:px-16 py-7 border-t border-border">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                {/* Left : name */}
                <h2 className="text-text-primary text-2xl font-black uppercase font-display">
					{/* Add only the first word in the name to the footer, so it doesn't look too crowded. For example, if the name is "John Doe", only "John" will be displayed in the footer. This keeps the design clean and focused on the brand identity. */}
                    {dev.name.split(" ")[0]}
                </h2>
                {/* Center : Copyright */}
                <p className="text-text-muted text-sm text-center flex-1">
                    {`© ${currentYear} ${dev.nick_name}. All rights reserved.`}
                </p>
                {/* Right : Social links */}
                <div className="flex items-center gap-4">
                    <a
                        href={dev.social.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub Profile"
                        className="text-text-muted hover:text-accent transition-colors duration-300"
                    >
                        <FaGithub size={20} />
                    </a>
                    <a
                        href={dev.social.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Twitter Profile"
                        className="text-text-muted hover:text-accent transition-colors duration-300"
                    >
                        <FaTwitter size={20} />
                    </a>
                    <a
                        href={dev.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn Profile"
                        className="text-text-muted hover:text-accent transition-colors duration-300"
                    >
                        <FaLinkedinIn size={20} />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
