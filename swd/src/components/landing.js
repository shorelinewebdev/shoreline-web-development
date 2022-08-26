import React from "react"
import ImageSlider from "./ImageSlider"
import LogoB from "../images/logob.png"
import { SliderData } from "./sliderData"
import Services from "./services";
import Work from "./work";
import About from "./about";
import Footer from "./footer";
import Team from "./team";
import Contact from "./contact";
export default function Landing(props){

 
    return(
        <div>
              <div className="mb-20 overflow-x-hidden h-[100vh] ">

                    <div className="flex flex-row justify-between p-5 items-center">
                        <h1 className="font-main text-[20px] md:text-[30px]">Shoreline Web Developpment</h1>
                        <img alt="logo-black" onClick={props.toggle}  src={LogoB} className="w-[45px] h-[36px] cursor-pointer "></img>
                    </div>
                        <div className="flex flex-col items-center justify-center h-[60vh]">
                            <h1 className="text-[80px] mb-10">web-____</h1>
                            <p className="text-[35px]">specialized blockchain websites for any project. </p>
                        </div>

               </div>
 
            <Services />
            <Work />
            <About />
            <Team />
            <Contact />
            <Footer />
        </div>
       
    )
}