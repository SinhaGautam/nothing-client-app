import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Badge } from "./ui/badge";
import { Copy, Share2, Users, Gift, Star } from "lucide-react";
import { useState } from "react";
import { useToast } from "../hooks/use-toast";

export default function Referral() {
  const [referralCode] = useState("NOTHING2024");
  const { toast } = useToast();

  const copyReferralCode = () => {
    navigator.clipboard.writeText(`${window.location.origin}?ref=${referralCode}`);
    toast({
      title: "Referral Link Copied!",
      description: "Share it with friends to earn absolutely nothing.",
    });
  };

  const benefits = [
    {
      icon: Gift,
      title: "Earn Nothing",
      description: "Get 0% commission on every referral purchase",
    },
    {
      icon: Users,
      title: "Help Friends",
      description: "Introduce friends to the joy of owning nothing",
    },
    {
      icon: Star,
      title: "VIP Status",
      description: "Become a certified Nothing Ambassador",
    },
  ];

  const stats = [
    { label: "Total Referrals", value: "∞", description: "People you've helped" },
    { label: "Nothing Earned", value: "$0.00", description: "Exactly as promised" },
    { label: "Rank", value: "#1", description: "In our hearts" },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-light mb-6 text-foreground">
            Refer Friends, Earn Nothing
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Share the gift of nothing with your friends and earn absolutely nothing in return. 
            It's a win-win situation where everyone gets nothing!
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Share2 className="w-5 h-5 text-primary" />
                    Your Referral Link
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="referral-link">Share this link with friends</Label>
                    <div className="flex gap-2">
                      <Input
                        id="referral-link"
                        value={`${window.location.origin}?ref=${referralCode}`}
                        readOnly
                        className="font-mono text-sm"
                      />
                      <Button
                        onClick={copyReferralCode}
                        variant="outline"
                        size="icon"
                        className="shrink-0"
                      >
                        <Copy className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="referral-code">Your Referral Code</Label>
                    <div className="flex gap-2">
                      <Input
                        id="referral-code"
                        value={referralCode}
                        readOnly
                        className="font-mono text-lg font-bold text-center"
                      />
                      <Button
                        onClick={() => {
                          navigator.clipboard.writeText(referralCode);
                          toast({
                            title: "Code Copied!",
                            description: "Share your referral code with friends.",
                          });
                        }}
                        variant="outline"
                        size="icon"
                        className="shrink-0"
                      >
                        <Copy className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border">
                    <h4 className="font-semibold mb-2 text-foreground">How It Works</h4>
                    <ol className="text-sm text-muted-foreground space-y-1">
                      <li>1. Share your referral link with friends</li>
                      <li>2. They purchase nothing using your link</li>
                      <li>3. You earn nothing (as promised)</li>
                      <li>4. Everyone is happy with their nothing</li>
                    </ol>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-primary" />
                    Your Nothing Stats
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {stats.map((stat, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div>
                        <div className="text-sm text-muted-foreground">{stat.label}</div>
                        <div className="text-xs text-muted-foreground">{stat.description}</div>
                      </div>
                      <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                    </div>
                  ))}
                  
                  <div className="pt-4 border-t border-border">
                    <Badge variant="secondary" className="mb-2">
                      Nothing Ambassador
                    </Badge>
                    <p className="text-sm text-muted-foreground">
                      You've achieved the highest level of nothing mastery. 
                      Your friends trust you to recommend the finest nothing.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <Card className="border-border bg-gradient-to-r from-primary/5 to-secondary/5">
              <CardHeader>
                <CardTitle className="text-center">Why Refer Friends?</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {benefits.map((benefit, index) => (
                    <motion.div
                      key={benefit.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.1 * index }}
                      viewport={{ once: true }}
                      className="text-center"
                    >
                      <div className="w-12 h-12 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <benefit.icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-lg font-semibold mb-2 text-foreground">
                        {benefit.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {benefit.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Card className="border-border bg-muted/50">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4 text-foreground">
                  Terms & Conditions
                </h3>
                <div className="text-sm text-muted-foreground space-y-2 max-w-2xl mx-auto">
                  <p>• You will earn exactly $0.00 for every referral (not a typo)</p>
                  <p>• All referral rewards are paid in the form of nothing</p>
                  <p>• Nothing earned cannot be exchanged for something</p>
                  <p>• Referral program may be discontinued at any time for no reason</p>
                  <p>• By participating, you agree that nothing is something</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}