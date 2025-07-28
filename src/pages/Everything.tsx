import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, Sparkles } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";


export default function Everything() {
    return (<div className="min-h-screen bg-background flex items-center justify-center p-6">
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl mx-auto text-center"
        >
            <motion.div
                initial={{ y: -20 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-8"
            >
                <Sparkles className="w-16 h-16 text-primary mx-auto mb-4" />
                <h1 className="text-4xl md:text-6xl font-light mb-4 text-foreground">
                    We Lied.
                </h1>
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
                    Here's Everything.
                </h2>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8"
            >
                {Array.from({ length: 6 }, (_, i) => (
                    <Card key={i} className="border-border hover:shadow-lg transition-all duration-300">
                        <CardContent className="p-6">
                            <div className="aspect-square bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 rounded-lg flex items-center justify-center mb-4">
                                <div className="w-24 h-24 border-2 border-dashed border-muted-foreground/50 rounded-full flex items-center justify-center">
                                    <span className="text-muted-foreground text-sm font-mono">∅</span>
                                </div>
                            </div>
                            <h3 className="text-lg font-semibold text-foreground mb-2">
                                Everything #{i + 1}
                            </h3>
                            <p className="text-sm text-muted-foreground mb-4">
                                This is literally still nothing. We weren't kidding about the nothing part.
                            </p>
                            <div className="flex items-center justify-between">
                                <span className="text-xl font-mono font-bold text-foreground">
                                    $∞
                                </span>
                                <Button
                                    variant="outline"
                                    size="sm"
                                    disabled
                                    className="text-muted-foreground"
                                >
                                    Still Nothing
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="bg-muted/50 rounded-lg p-8 mb-8"
            >
                <h3 className="text-2xl font-semibold mb-4 text-foreground">
                    The Truth About Everything
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                    Surprise! Everything is just more nothing. We told you we were selling nothing,
                    and we meant it. Even our "everything" is nothing. It's nothing all the way down.
                </p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
            >
                <Link href="/">
                    <Button className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 text-lg rounded-full">
                        <ArrowLeft className="w-5 h-5 mr-2" />
                        Back to Nothing
                    </Button>
                </Link>
            </motion.div>
        </motion.div>
    </div>
    )
}