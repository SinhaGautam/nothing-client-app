import { motion } from "framer-motion";

import Hero from "../components/hero";



import Leaderboard from "../components/leaderboard";
import Referral from "../components/referral";
import Featured from "../components/featured";
import { Preview } from "../components/preview";


export default function Home() {
    return <div>
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen bg-background"
        >
            
            <Hero />
            <Preview />
            <Featured />
            
            <Leaderboard />
            <Referral />
            
          
        </motion.div>
    </div>
}