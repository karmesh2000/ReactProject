import { RiReactjsLine } from "react-icons/ri";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import { FaVideo } from "react-icons/fa";

import {motion} from "framer-motion";

function iconVariants(duration) {
    return ({
        initial: { y: -10 },
        animate: {
            y: [10, -10],
            transition: {
                duration: duration,
                ease: "linear",
                repeat: Infinity,
                repeatType: "reverse",
            },
        },
    });
}

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
     <h1 className="my-20 text-center text-4xl">Technologies</h1>
       <div className="flex flex-wrap item-center justify-center gap-4">
       <motion.div 
       variants={iconVariants(2.5)}
       initial="initial"
       animate="animate" 
       className="rounded-2xl border-4 border-neutral-800 p-4">
            <RiReactjsLine className="text-7xl text-cyan-400"/>
        </motion.div>
        <motion.div
        variants={iconVariants(2.5)}
        initial="initial"
        animate="animate" 
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaHtml5 className="text-7xl text-green-500"/>
        </motion.div>
        <motion.div
        variants={iconVariants(2.5)}
        initial="initial"
        animate="animate" 
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaCss3 className="text-7xl text-sky-700"/>
        </motion.div>
        <motion.div 
        variants={iconVariants(2.5)}
        initial="initial"
        animate="animate" 
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <DiJavascript className="text-7xl text-yellow-400"/>
        </motion.div>
        <motion.div 
        variants={iconVariants(2.5)}
        initial="initial"
        animate="animate" 
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaVideo className="text-7xl text-purple-400"/>
        </motion.div>
       </div>
    </div>
  );
};

export default Technologies;