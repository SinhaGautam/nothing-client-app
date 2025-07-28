import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import { AlertTriangle, Check } from "lucide-react";

export default function Transparency() {
  const whatYouGet = [
    "A creative purchase confirmation",
    "A beautifully designed email receipt",
    "The satisfaction of owning nothing",
    "A great conversation starter",
  ];

  const whatYouDontGet = [
    "Any physical products",
    "Any digital downloads",
    "Any services or benefits",
    "Literally anything tangible",
  ];

  return (
    <section id="transparency" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-light mb-6 text-foreground">
              Complete Transparency
            </h2>
            <p className="text-xl text-muted-foreground">
              We believe in absolute honesty about what you're purchasing.
            </p>
            <p className="text-xl text-muted-foreground">
              We are 100% transparent: You get absolutely nothing.
            </p>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-destructive/10 rounded-2xl p-8 md:p-12 mb-8 border border-destructive/20"
          >
            <div className="flex items-start space-x-4 mb-6">
              <div className="w-8 h-8 bg-destructive rounded-full flex items-center justify-center flex-shrink-0">
                <AlertTriangle className="text-destructive-foreground text-sm" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-foreground">Important Disclosure</h3>
                <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                  By purchasing from buyNothing.com, you explicitly acknowledge and agree that:
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start space-x-3">
                    <Check className="text-green-500 mt-1 flex-shrink-0" size={16} />
                    <span>You will receive absolutely nothing in return for your payment</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Check className="text-green-500 mt-1 flex-shrink-0" size={16} />
                    <span>No physical or digital goods will be shipped or delivered</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Check className="text-green-500 mt-1 flex-shrink-0" size={16} />
                    <span>You are purchasing the concept and experience of nothing</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Check className="text-green-500 mt-1 flex-shrink-0" size={16} />
                    <span>All sales are final (you can't return nothing)</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Card className="border-border">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold mb-3 text-foreground">What You Get</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    {whatYouGet.map((item, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <span className="text-green-500 mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="border-border">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold mb-3 text-foreground">What You Don't Get</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    {whatYouDontGet.map((item, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <span className="text-destructive mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
