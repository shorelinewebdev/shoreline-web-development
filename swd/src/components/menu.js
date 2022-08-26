import Logow from "../images/logow.png"
import Xpic from "../images/x.png"
import { motion, AnimatePresence } from "framer-motion"
import { isMobile } from "react-device-detect"
import {Link} from 'react-scroll'

export default function Menu(props){
    return(
        <AnimatePresence>
            <motion.div className=" h-[100vh] md:w-[100vw] bg-off-black p-5 relative "
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         exit={{ opacity: 0 }}
         transition={{ duration: 0.5 }}
        >
            <div className="flex flex-row items-center justify-between">
                <motion.img initial={{ x:2000 }} animate={{ x: 0 }} transition={{ duration: 0.5 }} alt='img white' src={Logow} className="w-[45px] h-[36px] "></motion.img>
                <motion.img   onClick={props.toggle} alt='x' src={Xpic} className='cursor-pointer w-[35px]'></motion.img>
            </div>

            <div className="flex flex-col lg:flex-row justify-center mt-20">

                
                <div className="flex flex-col  text-center">

                    <h2 className="text-white text-[60px]">Contact</h2>

                    <div className="mb-3">
                        <p className="text-[#777777] text-[20px]">Email</p>
                        <p className="text-white text-[20px]">build@shorelineweb.dev</p>
                    </div>

                    <div className="mb-3">
                        <p className="text-[#777777] text-[20px]">Instagram</p>
                        <p className="text-white text-[20px]">@shorelinewebdev</p>
                    </div>

                    <div className="mb-3">
                        <p className="text-[#777777] text-[20px]">Location</p>
                        <p className="text-white text-[20px]">Vancouver, Canada</p>
                    </div>

                </div>

            </div>
            <div><h4 className="text-white mt-10 absolute bottom-5 left-5">©Shoreline Web Development 2022</h4></div>
        </motion.div>

        </AnimatePresence>
    )


        
       
}