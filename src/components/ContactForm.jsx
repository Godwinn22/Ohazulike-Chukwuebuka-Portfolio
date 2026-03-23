import { useState } from "react";
import emailjs from "@emailjs/browser";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { fadeUp } from "../utils/animations";

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const ContactForm = () => {
    const [formData, setFormData] = useState({
        from_name: "",
        from_email: "",
        enquiry_type: "",
        message: "",
    });
    // We track three separate states for the form submission
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [isError, setIsError] = useState(false);

    function handleChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        setIsLoading(true);
        setIsError(false);

        try {
            await emailjs.send(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                {
                    from_name: formData.from_name,
                    from_email: formData.from_email,
                    enquiry_type: formData.enquiry_type,
                    message: formData.message,
                },
                EMAILJS_PUBLIC_KEY,
            );
            setIsSuccess(true);

            // Reset form fields after successful submission
            setFormData({
                from_name: "",
                from_email: "",
                enquiry_type: "",
                message: "",
            });
        } catch (error) {
            console.error("EmailJS Error:", error);
            setIsError(true);
        } finally {
            // Whether success or error, we stop the loading state
            setIsLoading(false);
        }
    };
    return (
        <motion.section
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            id="contact"
            className="ml-0 md:ml-90 mb-18 md:mb-25 px-8 md:px-16"
        >
            {/* ── Section Heading ── */}
            <h2
                className="text-[60px] md:text-[80px] font-black leading-none uppercase mb-12"
                style={{ fontFamily: "var(--font-display)" }}
            >
                <span className="text-text-primary block">Let's Work</span>
                <span
                    className="block"
                    style={{
                        WebkitTextStroke: "3px #1E3358",
                        color: "transparent",
                    }}
                >
                    Together
                </span>
            </h2>

            {/* ── Success Message ── */}
            {isSuccess && (
                <div className="mb-8 p-4 bg-green-500/10 border border-green-500/30 rounded-xl">
                    <p className="text-green-400 font-medium">
                        Message sent successfully! I will get back to you soon.
                        🎉
                    </p>
                </div>
            )}

            {/* ── Error Message ── */}
            {isError && (
                <div className="mb-8 p-4 bg-red-500/10 border border-red-500/30 rounded-xl">
                    <p className="text-red-400 font-medium">
                        Something went wrong. Please try again or email me
                        directly.
                    </p>
                </div>
            )}

            {/* ── Form ── */}
            <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-6 max-w-2xl"
            >
                {/* Name and Email side by side on large screens */}
                <div className="flex flex-col md:flex-row gap-6">
                    {/* Full Name */}
                    <div className="flex flex-col gap-2 flex-1">
                        <label
                            htmlFor="from_name"
                            className="text-text-muted text-sm font-medium"
                        >
                            Full Name
                        </label>
                        <input
                            id="from_name"
                            name="from_name"
                            type="text"
                            required
                            placeholder="John Doe"
                            value={formData.from_name}
                            onChange={handleChange}
                            className="bg-bg-input border border-border rounded-xl px-4 py-3 text-text-primary placeholder:text-text-muted outline-none focus:border-accent transition-colors duration-300"
                        />
                    </div>

                    {/* Email Address */}
                    <div className="flex flex-col gap-2 flex-1">
                        <label
                            htmlFor="from_email"
                            className="text-text-muted text-sm font-medium"
                        >
                            Email Address
                        </label>
                        <input
                            id="from_email"
                            name="from_email"
                            type="email"
                            required
                            placeholder="john@example.com"
                            value={formData.from_email}
                            onChange={handleChange}
                            className="bg-bg-input border border-border rounded-xl px-4 py-3 text-text-primary placeholder:text-text-muted outline-none focus:border-accent transition-colors duration-300"
                        />
                    </div>
                </div>

                {/* Type of Enquiry */}
                <div className="flex flex-col gap-2">
                    <label
                        htmlFor="enquiry_type"
                        className="text-text-muted text-sm font-medium"
                    >
                        Type of Enquiry
                    </label>
                    <select
                        id="enquiry_type"
                        name="enquiry_type"
                        required
                        value={formData.enquiry_type}
                        onChange={handleChange}
                        className="bg-bg-input border border-border rounded-xl px-4 py-3 text-text-primary outline-0 focus:border-accent transition-colors duration-300 cursor-pointer"
                    >
                        <option value="" disabled>
                            Select an option
                        </option>
                        <option value="Job Opportunity">Job Opportunity</option>
                        <option value="Freelance Project">
                            Freelance Project
                        </option>
                        <option value="Collaboration">Collaboration</option>
                        <option value="Just saying hi">Just saying hi</option>
                    </select>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-2">
                    <label
                        htmlFor="message"
                        className="text-text-muted text-sm font-medium"
                    >
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        required
                        placeholder="Tell me about your project or opportunity..."
                        value={formData.message}
                        onChange={handleChange}
                        rows={6}
                        className="bg-bg-input border border-border rounded-xl px-4 py-3 text-text-primary placeholder:text-text-muted outline-none focus:border-accent transition-colors duration-300 resize-none"
                    />
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    disabled={isLoading}
                    className="bg-accent hover:bg-accent-hover text-white font-bold py-4 px-8 rounded-xl transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed self-start cursor-pointer"
                >
                    {/* 
            We show different text based on the loading state.
            This is a ternary operator:
            condition ? "value if true" : "value if false"
          */}
                    {isLoading ? "Sending..." : "Send Message"}
                </button>
            </form>
        </motion.section>
    );
};

export default ContactForm;
