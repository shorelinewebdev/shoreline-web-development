
import Card1 from "../images/Card 1.png"
import Card1Back from "../images/Card1Back.png"
import Card2 from "../images/Card 2.png"
import Card2Back from "../images/Card2Back.png"
import Card3 from "../images/Card3.png"
import Card3Back from "../images/Card3Back.png"
import Reel from "./reel";
import Reel2 from "./reel2"
import { isMobile } from 'react-device-detect';
import React from "react";
import { useState } from "react";
export default function Services(){

   
    const [flip, setFlip] = useState(false)


    return(
        <div id="services">
            <div className="flex flex-col justify-start mx-10 md:mx-20 my-10 ">
                <hr className="bg-black border-black h-[1px] w-[100%] "></hr>
                <h2 className="text-[55px]">Services</h2>
            </div>

           
            
            
            <div className="flex justify-center">
                     <div className="flex flex-col items-center md:justify-between mb-10 md:mb-0 md:flex  md:flex-row w-[80%] ">

                        <div className={isMobile? "flip-cardm   ":"flip-card mx-0 md:mx-5 "} >
                            <div className="flip-card-inner" >
                                <div className="flip-card-front " ><img   src={Card1}></img></div>
                                <div className="flip-card-back" ><img  src={Card1Back}></img></div>
                            </div>
                        </div>

                        <div className={isMobile? "flip-cardm   ":  "flip-card mx-0 md:mx-5 "}  >
                            <div className="flip-card-inner " >
                                <div className="flip-card-front" ><img src={Card2}></img></div>
                                <div className="flip-card-back" ><img src={Card2Back}></img></div>
                            </div>
                        </div>

                        <div className={isMobile? "flip-cardm " : "flip-card mx-0 md:mx-5 "}  >
                            <div className="flip-card-inner" >
                                <div className="flip-card-front" ><img src={Card3}></img></div>
                                <div className="flip-card-back" ><img src={Card3Back}></img></div>
                            </div>
                        </div>

                    </div>
            </div> 
           
           

            <div>
                <Reel />
                <Reel2 />
                
            </div>

           
        </div>
    )
}