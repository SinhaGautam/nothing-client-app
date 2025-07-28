import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Trophy, Medal, Award } from "lucide-react";

const topBuyers = [
  {
    rank: 1,
    name: "Dr. Void McEmpty",
    totalSpent: "$1,247.50",
    itemsPurchased: 89,
    icon: Trophy,
    color: "text-yellow-500",
    bgColor: "bg-yellow-50 dark:bg-yellow-900/20",
  },
  {
    rank: 2,
    name: "Professor Null",
    totalSpent: "$987.25",
    itemsPurchased: 67,
    icon: Medal,
    color: "text-gray-400",
    bgColor: "bg-gray-50 dark:bg-gray-900/20",
  },
  {
    rank: 3,
    name: "The Minimalist",
    totalSpent: "$823.75",
    itemsPurchased: 54,
    icon: Award,
    color: "text-amber-600",
    bgColor: "bg-amber-50 dark:bg-amber-900/20",
  },
  {
    rank: 4,
    name: "Zero Hero",
    totalSpent: "$765.00",
    itemsPurchased: 43,
    icon: null,
    color: "text-muted-foreground",
    bgColor: "bg-muted/20",
  },
  {
    rank: 5,
    name: "Empty Enthusiast",
    totalSpent: "$642.50",
    itemsPurchased: 38,
    icon: null,
    color: "text-muted-foreground",
    bgColor: "bg-muted/20",
  },
  {
    rank: 6,
    name: "Nothing Ninja",
    totalSpent: "$587.25",
    itemsPurchased: 35,
    icon: null,
    color: "text-muted-foreground",
    bgColor: "bg-muted/20",
  },
  {
    rank: 7,
    name: "Void Virtuoso",
    totalSpent: "$523.75",
    itemsPurchased: 31,
    icon: null,
    color: "text-muted-foreground",
    bgColor: "bg-muted/20",
  },
  {
    rank: 8,
    name: "Absence Aficionado",
    totalSpent: "$467.50",
    itemsPurchased: 28,
    icon: null,
    color: "text-muted-foreground",
    bgColor: "bg-muted/20",
  },
];

export default function Leaderboard() {
  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-light mb-6 text-foreground">
            Top Nothing Buyers
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Celebrating our most dedicated customers who've mastered the art of buying nothing.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid gap-4">
            {topBuyers.map((buyer, index) => (
              <motion.div
                key={buyer.rank}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="group"
              >
                <Card className={`border-border hover:shadow-lg transition-all duration-300 ${buyer.bgColor}`}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center ${buyer.bgColor}`}>
                          {buyer.icon ? (
                            <buyer.icon className={`w-6 h-6 ${buyer.color}`} />
                          ) : (
                            <span className="text-xl font-bold text-foreground">
                              #{buyer.rank}
                            </span>
                          )}
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-foreground">
                            {buyer.name}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {buyer.itemsPurchased} items of nothing purchased
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-foreground">
                          {buyer.totalSpent}
                        </div>
                        <Badge variant="secondary" className="mt-1">
                          Rank #{buyer.rank}
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <Card className="border-border bg-gradient-to-r from-primary/10 to-secondary/10">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4 text-foreground">
                  Join the Leaderboard
                </h3>
                <p className="text-muted-foreground mb-6">
                  Start your journey to nothing greatness. Every purchase of nothing counts!
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-3xl font-bold text-foreground mb-2">∞</div>
                    <div className="text-sm text-muted-foreground">Total Nothing Sold</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-foreground mb-2">0</div>
                    <div className="text-sm text-muted-foreground">Items Shipped</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-foreground mb-2">100%</div>
                    <div className="text-sm text-muted-foreground">Customer Satisfaction</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}