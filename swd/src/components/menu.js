import Logow from "../images/logow.png"
import Xpic from "../images/x.png"
import { motion, AnimatePresence } from "framer-motion"
export default function Menu(props){
    return(
        <AnimatePresence>
            <motion.div className="h-[100vh] w-[100vw] bg-off-black p-5 relative "
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         exit={{ opacity: 0 }}
         transition={{ duration: 0.5 }}
        >
            <div className="flex flex-row items-center justify-between">
                <motion.img initial={{ x:2000 }} animate={{ x: 0 }} transition={{ duration: 0.5 }} alt='img white' src={Logow} className="w-[45px] h-[36px] "></motion.img>
                <motion.img   onClick={props.toggle} alt='x' src={Xpic} className='cursor-pointer w-[35px]'></motion.img>
            </div>

            <div className="flex flex-row justify-start mt-20">

                <nav className="flex-col px-20 mr-60">
                    <h3 className="text-[100px] text-white cursor-pointer">Work</h3>
                    <h3 className="text-[100px] text-white  cursor-pointer" >About</h3>
                    <h3 className="text-[100px] text-white  cursor-pointer">Services</h3>
                </nav>

                <div className="border-l-[1px] min-h-[450px] max-h-[650px] "></div>

                <div className="flex flex-col px-40 mx-40 mt-10">

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