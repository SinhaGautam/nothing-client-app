import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Card, CardContent } from "./ui/card";
import { Check, Mail, Package, AlertCircle, Share2 } from "lucide-react";
import { useToast } from "../hooks/use-toast";
import { apiRequest } from "../lib/queryClient";
import type { Product } from "../schema/entity";
import SocialShare from "./social-share";

const checkoutSchema = z.object({
  customerName: z.string().min(1, "Name is required"),
  customerEmail: z.string().email("Valid email is required"),
});

type CheckoutFormData = z.infer<typeof checkoutSchema>;

interface PurchaseModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function PurchaseModal({ product, isOpen, onClose }: PurchaseModalProps) {
  const [step, setStep] = useState<"form" | "confirmation" | "share">("form");
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [orderData, setOrderData] = useState<any>(null);
  const { toast } = useToast();
  

  const form = useForm<CheckoutFormData>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
      customerName: "",
      customerEmail: "",
    },
  });

  const checkoutMutation = useMutation({
    mutationFn: async (data: CheckoutFormData) => {
      const response = await apiRequest("POST", "/checkout", {
        productId: product?._id,
        customerName: data.customerName,
        customerEmail: data.customerEmail,
      });
      return response.json();
    },
    onSuccess: (data) => {
      
      setOrderData(data?.data);
      setStep("confirmation");
      toast({
        title: "Purchase Confirmed!",
        description: "You have successfully purchased nothing.",
      });
    },
    onError: (error) => {
      toast({
        title: "Purchase Failed",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (data: CheckoutFormData) => {
    checkoutMutation.mutate(data);
  };

  const handleClose = () => {
    setStep("form");
    setOrderData(null);
    form.reset();
    onClose();
  };

  const goToShare = () => {
    setStep("share");
  };

  if (!product) return null;

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md ">
        <DialogHeader>
          <DialogTitle>
            {step === "form" 
              ? `Purchase ${product.name}` 
              : step === "confirmation" 
                ? "Purchase Confirmed!" 
                : "Share Your Nothing"
            }
          </DialogTitle>
        </DialogHeader>

        <AnimatePresence mode="wait">
          {step === "form" && (
            <motion.div
              key="form"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="mb-6">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-foreground">{product.name}</h3>
                      <p className="text-sm text-muted-foreground">{product.category}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-foreground">${product.price}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="customerName">Full Name</Label>
                  <Input
                    id="customerName"
                    {...form.register("customerName")}
                    placeholder="Enter your full name"
                  />
                  {form.formState.errors.customerName && (
                    <p className="text-sm text-destructive">
                      {form.formState.errors.customerName.message}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="customerEmail">Email Address</Label>
                  <Input
                    id="customerEmail"
                    type="email"
                    {...form.register("customerEmail")}
                    placeholder="Enter your email address"
                  />
                  {form.formState.errors.customerEmail && (
                    <p className="text-sm text-destructive">
                      {form.formState.errors.customerEmail.message}
                    </p>
                  )}
                </div>

                <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4">
                  <div className="flex items-start space-x-2">
                    <AlertCircle className="text-destructive mt-0.5 flex-shrink-0" size={16} />
                    <div>
                      <p className="text-sm font-medium text-foreground">Important Reminder</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        You will receive absolutely nothing in return for this purchase. 
                        This is not a mistake or error.
                      </p>
                    </div>
                  </div>
                </div>

                <Button
                  type="submit"
                  disabled={checkoutMutation.isPending}
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  {checkoutMutation.isPending ? "Processing..." : `Buy Nothing for $${product.price}`}
                </Button>
              </form>
            </motion.div>
          )}

          {step === "confirmation" && (
            <motion.div
              key="confirmation"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", duration: 0.6 }}
                className="w-16 h-16 bg-green-500 rounded-full mx-auto mb-4 flex items-center justify-center"
              >
                <Check className="text-white text-xl" />
              </motion.div>

              <h3 className="text-2xl font-semibold mb-4 text-foreground">Purchase Confirmed!</h3>
              <p className="text-muted-foreground mb-6">
                Congratulations! You have successfully purchased{" "}
                <span className="font-semibold text-foreground">{orderData?.order?.product}</span> for{" "}
                <span className="font-semibold text-foreground">${orderData?.order?.amount}</span>.
              </p>

              <Card className="bg-muted/50 mb-6">
                <CardContent className="p-4">
                  <p className="text-sm text-muted-foreground mb-2 font-medium">
                    What happens next:
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li className="flex items-center space-x-2">
                      <Mail size={14} className="text-green-500" />
                      <span>You will receive a confirmation email</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Package size={14} className="text-green-500" />
                      <span>Nothing will be shipped to you</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Check size={14} className="text-green-500" />
                      <span>You now own premium nothing</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Check size={14} className="text-green-500" />
                      <span>Enjoy your purchase!</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <div className="flex gap-2">
                <Button
                  onClick={goToShare}
                  className="bg-primary text-primary-foreground hover:bg-primary/90 flex-1"
                >
                  <Share2 className="w-4 h-4 mr-2" />
                  Share on Social
                </Button>
                <Button
                  onClick={handleClose}
                  variant="outline"
                  className="flex-1"
                >
                  Continue Shopping
                </Button>
              </div>
            </motion.div>
          )}

          {step === "share" && (
            <motion.div
              key="share"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <SocialShare
                orderNumber={orderData?.orderNumber || ""}
                productName={orderData?.productName || ""}
                amount={orderData?.amount || ""}
                onClose={handleClose}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </DialogContent>
    </Dialog>
  );
}