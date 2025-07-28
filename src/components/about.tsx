import { motion } from "framer-motion";
// eslint-disable-next-line no-shadow-restricted-names
import { Infinity, Feather, Heart } from "lucide-react";
import { Faq } from "./faq";
import { Contact } from "./contact";

const features = [
  {
    icon: Infinity,
    title: "Infinite Potential",
    description: "Nothing contains everything that could be, making it infinitely valuable.",
  },
  {
    icon: Feather,
    title: "Ultimate Minimalism",
    description: "Achieve perfect minimalism with our expertly crafted nothing.",
  },
  {
    icon: Heart,
    title: "Pure Experience",
    description: "Experience the joy of purchasing without the burden of possession.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-light mb-8 text-foreground">
            The Philosophy of Nothing
          </h2>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            In a world obsessed with having more, we celebrate the profound beauty of having nothing.
            Our nothing is not just an absence—it's a statement, a philosophy, a way of life.
          </p>


          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Inspired by minimalism, satire, and a little existential dread.
          </p>


          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            We aim to make you think, laugh, and maybe spend money on nothing. Literally.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-16 h-16 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center"
                >
                  <feature.icon className="text-primary-foreground text-xl" />
                </motion.div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
          
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto text-center"
        >
          <div className="min-h-screen flex flex-col items-center justify-center bg-white text-black p-8">
            <div className="w-full max-w-6xl grid md:grid-cols-2 gap-16">
              <Faq />
              <Contact />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
