import { Link } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { fadeUp } from "../utils/animations";

const NotFound = () => {
    return (
        <motion.main
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="ml-0 lg:ml-90 md:mt-8 min-h-screen px-8 md:px-16 pt-40 pb-24"
        >
            <h1 className="font-display text-[35px] md:text-[70px] font-black leading-none uppercase mb-8 flex items-center justify-center flex-col gap-6">
                <span className="text-text-primary block">404</span>
                <span
                    className="block"
                    style={{
                        WebkitTextStroke: "3px #1E3358",
                        color: "transparent",
                    }}
                >
                    Not Found
                </span>
            </h1>
            <div className="flex flex-col items-center text-center gap-6">
                <p className="text-text-muted text-center text-lg mb-8">
                    Oops! The page you are looking for does not exist.
                </p>
                <Link
                    to="/"
                    className="bg-accent hover:bg-accent-hover text-white font-bold py-4 px-8 rounded-xl transition-colors duration-300 cursor-pointer"
                >
                    Go Back Home
                </Link>
            </div>
        </motion.main>
    );
};

export default NotFound;
