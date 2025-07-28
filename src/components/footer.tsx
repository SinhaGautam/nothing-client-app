import { motion } from "framer-motion";
import { X, Instagram, Facebook } from "lucide-react";
import { Link } from "wouter";

export default function Footer() {
  const productLinks = [
    "Essential Nothing",
    "Premium Nothing",
    "Artisan Nothing",
    "Luxury Nothing",
  ];

  const supportLinks = [
    "FAQ",
    "Contact Us",
    "Shipping (N/A)",
    "Returns (N/A)",
  ];

  const legalLinks = [
    "Terms of Service",
    "Privacy Policy",
    "Refund Policy",
    "Disclaimer",
  ];

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4">buyNothing</h3>
            <p className="text-primary-foreground/80 mb-4">
              Pioneering the art of selling nothing since today.
            </p>
            <div className="flex space-x-4">
              {[X, Instagram, Facebook].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ scale: 1.2 }}
                  className="text-primary-foreground/60 hover:text-primary-foreground transition-colors"
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">Products</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              {productLinks.map((link, index) => (
                <li key={index}>
                  <Link href="/products" className="hover:text-primary-foreground transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              {supportLinks.map((link, index) => (
                <li key={index}>
                  <Link href="/about" className="hover:text-primary-foreground transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              {legalLinks.map((link, index) => (
                <li key={index}>
                  <Link href="/tranparency" className="hover:text-primary-foreground transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/60"
        >
          <p>&copy; 2024 buyNothing.com. All rights reserved. Nothing guaranteed.</p>
          <p className="text-xs mt-2">
            Want <Link href="/everything" className="text-primary-foreground/40 hover:text-primary-foreground/80 transition-colors underline">everything</Link> instead?
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
