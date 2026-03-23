// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { fadeUp } from "../utils/animations";
import TechStackList from "../components/TechStackList";

const TechStack = () => {
    return (
        <motion.main
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="ml-0 md:ml-90 mt-2 md:mt-8 min-h-screen px-8 md:px-16 pt-31 pb-24"
        >
            <h1 className="font-display text-[35px] md:text-[70px] font-black uppercase mb-8 leading-none">
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
            </h1>

            <TechStackList />
        </motion.main>
    );
};

export default TechStack;
