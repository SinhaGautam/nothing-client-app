import { motion } from "framer-motion";
import { Card, CardContent } from "../components/ui/card";
import { AlertCircle } from "lucide-react";
import { Button } from "../components/ui/button";
import { navigate } from "wouter/use-browser-location";

export default function PageNotFound() {
    return <div>
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen bg-background"
        >
            <div className="min-h-screen w-full flex items-center justify-center bg-gray-50">
                <Card className="w-full max-w-md mx-4">
                    <CardContent className="pt-6">
                        <div className="flex justify-center mb-4 gap-2">
                            <AlertCircle className="h-8 w-8 text-red-500" />
                            <h1 className="text-2xl font-bold text-gray-900">“You’ve found... Nothing.</h1>
                        </div>
                        <p className="text-xl text-muted-foreground text-center">
                            But not the kind we’re selling.
                        </p>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="flex flex-col sm:flex-row gap-4 justify-center items-center my-12"
                        >
                            <Button
                                size="lg"
                                onClick={() => navigate("/")}
                                className="bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 text-lg  rounded-full transform hover:scale-105 transition-all duration-300"
                            >
                                Return to Something
                            </Button>
                        </motion.div>
                    </CardContent>
                </Card>
            </div>
        </motion.div>
    </div>
}