import { Link, useLocation } from "react-router-dom";
import {
    FaHome,
    FaFolder,
    FaBriefcase,
    FaEnvelope,
    FaMoon,
	FaCode
} from "react-icons/fa";
import { FiSun } from "react-icons/fi";

const Navbar = ({ isDark, toggleTheme }) => {
    const location = useLocation();

    const currentPath = location.pathname;

    const navItems = [
        {
            path: "/",
            icon: FaHome,
            label: "Home",
        },
        {
            path: "/projects",
            icon: FaFolder,
            label: "Projects",
        },
        {
            path: "/experience",
            icon: FaBriefcase,
            label: "Experience",
        },
        {
            path: "/techstack",
            icon: FaCode,
            label: "TechStack",
        },
        {
            path: "contact",
            icon: FaEnvelope,
            label: "Contact",
        },
    ];
    return (
        <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
            {/*
        left-1/2 moves the left edge of the nav to the center of the screen.
        -translate-x-1/2 then shifts it back left by half its own width.
        Together these two classes perfectly center the navbar horizontally.
        This is the standard CSS trick for centering fixed elements.
      */}

            {/* The pill container */}
            <div className="flex items-center gap-2 bg-bg-sidebar border border-border rounded-full px-6 py-3">
                {navItems.map(function (item) {
                    // We check if the current path matches this nav item's path
                    const isActive = currentPath === item.path;

                    // We store the Icon component in a variable
                    // so we can use it as a JSX element below
                    const Icon = item.icon;

                    return (
                        <div key={item.path} className="relative group/tooltip">
                            {/* If this is the contact item we render a button that scrolls
        					to the contact section. For all other items we render a Link
      						that navigates to a new page.
    						*/}
                            {item.path === "contact" ? (
                                <button
                                    aria-label={item.label}
                                    onClick={() => {
                                        const contactSection =
                                            document.getElementById("contact");
                                        if (contactSection) {
                                            contactSection.scrollIntoView({
                                                behavior: "smooth",
                                            });
                                        }
                                    }}
                                    className="w-10 h-10 flex items-center justify-center rounded-full transition-colors duration-300 text-text-muted hover:text-accent cursor-pointer"
                                >
                                    <FaEnvelope size={20} />
                                </button>
                            ) : (
                                <Link
                                    to={item.path}
                                    label={item.label}
                                    className={
                                        "w-10 h-10 flex items-center justify-center rounded-full transition-colors duration-300 " +
                                        (isActive
                                            ? "bg-accent text-white"
                                            : "text-text-muted hover:text-accent")
                                    }
                                >
                                    <Icon size={20} />
                                </Link>
                            )}
                            {/* Tooltip — shows on hover */}
                            <span className="absolute top-12 left-1/2 -translate-x-1/2 bg-bg-sidebar border border-border text-text-primary text-xs px-2 py-1 rounded-lg whitespace-nowrap opacity-0 group-hover/tooltip:opacity-100 transition-opacity duration-200 pointer-events-none">
                                {item.label}
                            </span>
                        </div>
                    );
                })}
                {/* Theme Toggle */}
                <div className="relative group/tooltip">
                    <button
                        onClick={toggleTheme}
                        aria-label="Toggle theme"
                        className="w-10 h-10 flex items-center justify-center rounded-full text-text-muted hover:text-accent transition-colors duration-300 cursor-pointer"
                    >
                        {isDark ? <FiSun size={16} /> : <FaMoon size={16} />}
                    </button>
                    {/* Tooltip — shows on hover */}
                    <span className="absolute top-12 left-1/2 -translate-x-1/2 bg-bg-sidebar border border-border text-text-primary text-xs px-2 py-1 rounded-lg whitespace-nowrap opacity-0 group-hover/tooltip:opacity-100 transition-opacity duration-200 pointer-events-none">
                        {isDark ? "Light Mode" : "Dark Mode"}
                    </span>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
