import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import { navigate } from "wouter/use-browser-location";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="pt-24 pb-16 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-light mb-6 text-foreground leading-tight">
              The Art of{" "}
              <motion.span
                className="font-bold inline-block"
                animate={{ 
                  y: [0, -10, 0],
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                Nothing
              </motion.span>
            </h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed"
            >
              Experience the profound simplicity of purchasing absolutely nothing. 
              A revolutionary concept in minimalist commerce.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            >
              <Button
                size="lg"
                onClick={() => scrollToSection("products")}
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg rounded-full transform hover:scale-105 transition-all duration-300"
              >
                Explore Nothing
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => navigate("/about")}
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-6 text-lg rounded-full transition-all duration-300"
              >
                Learn More
              </Button>
            </motion.div>
            
          </motion.div>
        </div>
      </div>
    </section>
  );
}
