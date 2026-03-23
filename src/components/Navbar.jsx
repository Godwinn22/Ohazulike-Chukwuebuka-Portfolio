import { Link, useLocation } from "react-router-dom";
import {
    FaHome,
    FaFolder,
    FaBriefcase,
    FaWrench,
    FaEnvelope,
} from "react-icons/fa";

const Navbar = () => {
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
            icon: FaWrench,
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
                        <div key={item.path}>
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
                                    className="w-10 h-10 flex items-center justify-center rounded-full transition-colors duration-300 text-text-muted hover:text-accent"
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
                        </div>
                    );
                })}
            </div>
        </nav>
    );
};

export default Navbar;
