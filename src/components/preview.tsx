import { motion } from "framer-motion";

export function Preview() {
    return (
        <div className="min-h-screen bg-white text-black p-8 flex flex-col items-center justify-center font-sans">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-12"
            >
                {/* Section: What is Nothing? */}
                <div className="w-full max-w-5xl grid md:grid-cols-2 gap-8 items-center py-16">
                    {/* Left Text */}
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">What is Nothing?</h2>
                        <p className="text-lg leading-relaxed">
                            <span className="block mb-4">Nothing is timeless. Nothing is priceless.</span>
                            <span className="block">And now, for the first time, you can buy it.</span>
                        </p>
                    </div>

                    {/* Right Blank Image */}
                    <div className="w-full h-64 bg-gray-100 border border-dashed border-gray-300 flex items-center justify-center">
                        <span className="text-gray-400 italic">[ Nothing Here ]</span>
                    </div>
                </div>

                {/* Why Buy Nothing? */}
                <div className="w-full max-w-3xl py-24 text-center">
                    <h3 className="text-4xl md:text-5xl font-semibold mb-12">Why Buy Nothing?</h3>
                    <div className="space-y-12">
                        {[
                            "For laughs.",
                            "For art.",
                            "For the void within us all."
                        ].map((text, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.3, duration: 0.6 }}
                                viewport={{ once: true }}
                                className="text-2xl font-medium text-gray-800"
                            >
                                {text}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
