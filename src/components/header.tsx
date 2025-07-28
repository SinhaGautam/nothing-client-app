import { useState } from "react";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import { Button } from "../components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../components/ui/sheet";
import { navigate } from "wouter/use-browser-location";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border"
    >
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-10">
            <motion.h1 
              whileHover={{ scale: 1.05 }}
              className="text-3xl font-bold text-foreground cursor-pointer"
              onClick={() => navigate("/")}
            >
              buyNothing
            </motion.h1>
            
            <div className="hidden md:flex space-x-6">
              <button
                onClick={() => navigate("/products")}
                className="text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                Products
              </button>
              <button
                onClick={() => navigate("/about")}
                className="text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                About
              </button>
              <button
                onClick={() => navigate("/tranparency")}
                className="text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                Transparency
              </button>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="md:hidden text-muted-foreground hover:text-foreground"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <nav className="flex flex-col space-y-4 mt-6 md:hidden w-[300px] sm:w-[400px] h-full bg-background z-50 p-6">
                  <button
                    onClick={() => scrollToSection("products")}
                    className="text-left text-lg text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Products
                  </button>
                  <button
                    onClick={() => scrollToSection("about")}
                    className="text-left text-lg text-muted-foreground hover:text-foreground transition-colors"
                  >
                    About
                  </button>
                  <button
                    onClick={() => scrollToSection("transparency")}
                    className="text-left text-lg text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Transparency
                  </button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </div>
    </motion.header>
  );
}
