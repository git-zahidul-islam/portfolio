"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export function Contact() {
    const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("submitting");
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        setStatus("success");
        setTimeout(() => setStatus("idle"), 3000);
    };

    return (
        <motion.section
            id="contact"
            className="py-12 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
        >
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Get in Touch</h2>
            <div className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8">
                <form onSubmit={handleSubmit} className="space-y-6 max-w-xl">
                    <div className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    required
                                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-slate-400 focus:border-transparent outline-none transition-all"
                                    placeholder="Your name"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    required
                                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-slate-400 focus:border-transparent outline-none transition-all"
                                    placeholder="your@email.com"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                            <textarea
                                id="message"
                                required
                                rows={4}
                                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-slate-400 focus:border-transparent outline-none transition-all resize-none"
                                placeholder="How can I help you?"
                            ></textarea>
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={status === "submitting" || status === "success"}
                        className="bg-slate-900 text-white px-8 py-3 rounded-lg font-medium hover:bg-slate-800 disabled:opacity-70 disabled:cursor-not-allowed transition-all w-full md:w-auto"
                    >
                        {status === "submitting" ? "Sending..." : status === "success" ? "Message Sent!" : "Send Message"}
                    </button>
                </form>
            </div>
        </motion.section>
    );
}
