import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Separator } from "./ui/separator";
import { CreditCard, Smartphone, Shield, Check } from "lucide-react";

interface PaymentMethodsProps {
  amount: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onPaymentSelect: (method: string, details: any) => void;
}

export default function PaymentMethods({ amount, onPaymentSelect }: PaymentMethodsProps) {
  const [selectedMethod, setSelectedMethod] = useState<string>("card");
  const [cardDetails, setCardDetails] = useState({
    number: "",
    expiry: "",
    cvv: "",
    name: "",
  });
  const [upiId, setUpiId] = useState("");

  const handleCardPayment = () => {
    onPaymentSelect("card", {
      ...cardDetails,
      method: "card",
    });
  };

  const handleUpiPayment = () => {
    onPaymentSelect("upi", {
      upiId,
      method: "upi",
    });
  };

  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
    const matches = v.match(/\d{4,16}/g);
    const match = matches && matches[0] || "";
    const parts = [];
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    if (parts.length) {
      return parts.join(" ");
    } else {
      return v;
    }
  };

  const formatExpiry = (value: string) => {
    const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
    if (v.length >= 2) {
      return v.substring(0, 2) + "/" + v.substring(2, 4);
    }
    return v;
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-lg font-semibold text-foreground mb-2">Choose Payment Method</h3>
        <p className="text-sm text-muted-foreground">
          Complete your purchase of nothing for ${amount}
        </p>
      </div>

      <RadioGroup value={selectedMethod} onValueChange={setSelectedMethod}>
        <div className="space-y-4">
          {/* Card Payment */}
          <div className="relative">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="card" id="card" />
              <Label htmlFor="card" className="flex items-center gap-2 cursor-pointer">
                <CreditCard className="w-5 h-5" />
                <span>Credit/Debit Card</span>
                <div className="flex gap-1">
                  <div className="w-8 h-5 bg-blue-600 rounded text-white text-xs flex items-center justify-center font-bold">
                    VISA
                  </div>
                  <div className="w-8 h-5 bg-red-600 rounded text-white text-xs flex items-center justify-center font-bold">
                    MC
                  </div>
                </div>
              </Label>
            </div>
            
            {selectedMethod === "card" && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-4 ml-6"
              >
                <Card>
                  <CardContent className="p-4">
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="cardNumber">Card Number</Label>
                        <Input
                          id="cardNumber"
                          placeholder="1234 5678 9012 3456"
                          value={cardDetails.number}
                          onChange={(e) =>
                            setCardDetails({
                              ...cardDetails,
                              number: formatCardNumber(e.target.value),
                            })
                          }
                          maxLength={19}
                        />
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="expiry">Expiry Date</Label>
                          <Input
                            id="expiry"
                            placeholder="MM/YY"
                            value={cardDetails.expiry}
                            onChange={(e) =>
                              setCardDetails({
                                ...cardDetails,
                                expiry: formatExpiry(e.target.value),
                              })
                            }
                            maxLength={5}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="cvv">CVV</Label>
                          <Input
                            id="cvv"
                            placeholder="123"
                            value={cardDetails.cvv}
                            onChange={(e) =>
                              setCardDetails({
                                ...cardDetails,
                                cvv: e.target.value.replace(/\D/g, ""),
                              })
                            }
                            maxLength={4}
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="cardName">Cardholder Name</Label>
                        <Input
                          id="cardName"
                          placeholder="John Doe"
                          value={cardDetails.name}
                          onChange={(e) =>
                            setCardDetails({
                              ...cardDetails,
                              name: e.target.value,
                            })
                          }
                        />
                      </div>
                      
                      <Button
                        onClick={handleCardPayment}
                        className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                        disabled={
                          !cardDetails.number ||
                          !cardDetails.expiry ||
                          !cardDetails.cvv ||
                          !cardDetails.name
                        }
                      >
                        <Shield className="w-4 h-4 mr-2" />
                        Pay ${amount} with Card
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </div>

          <Separator />

          {/* UPI Payment */}
          <div className="relative">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="upi" id="upi" />
              <Label htmlFor="upi" className="flex items-center gap-2 cursor-pointer">
                <Smartphone className="w-5 h-5" />
                <span>UPI Payment</span>
                <div className="flex gap-1">
                  <div className="w-8 h-5 bg-orange-600 rounded text-white text-xs flex items-center justify-center font-bold">
                    UPI
                  </div>
                </div>
              </Label>
            </div>
            
            {selectedMethod === "upi" && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-4 ml-6"
              >
                <Card>
                  <CardContent className="p-4">
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="upiId">UPI ID</Label>
                        <Input
                          id="upiId"
                          placeholder="yourname@paytm"
                          value={upiId}
                          onChange={(e) => setUpiId(e.target.value)}
                        />
                        <p className="text-xs text-muted-foreground">
                          Enter your UPI ID (e.g., yourname@paytm, yourname@phonepe, yourname@gpay)
                        </p>
                      </div>
                      
                      <div className="bg-muted/50 p-3 rounded-lg">
                        <div className="flex items-center gap-2 text-sm">
                          <Check className="w-4 h-4 text-green-600" />
                          <span>Secure UPI payment</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm mt-1">
                          <Check className="w-4 h-4 text-green-600" />
                          <span>Instant confirmation</span>
                        </div>
                      </div>
                      
                      <Button
                        onClick={handleUpiPayment}
                        className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                        disabled={!upiId || !upiId.includes("@")}
                      >
                        <Smartphone className="w-4 h-4 mr-2" />
                        Pay ${amount} with UPI
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </div>
        </div>
      </RadioGroup>

      <div className="bg-muted/30 p-4 rounded-lg">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Shield className="w-4 h-4" />
          <span>Your payment is secured with 256-bit SSL encryption</span>
        </div>
      </div>
    </div>
  );
}