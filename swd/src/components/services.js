import React from "react";
import Card1 from "../images/Card 1.png"
import Card1Back from "../images/Card1Back.png"
import Card2 from "../images/Card 2.png"
import Card2Back from "../images/Card2Back.png"
import Card3 from "../images/Card3.png"
import Card3Back from "../images/Card3Back.png"
import Reel from "./reel";

export default function Services(){

   



    return(
        <div>
            <div className="flex flex-col justify-start mx-20 ">
                <hr className="bg-black border-black h-[1px] w-[100%] "></hr>
                <h2 className="text-[55px]">Services</h2>
            </div>


            <div className="flex flex-col justify-between  md:flex-row md:mx-60">

                    <div className="flip-card" >
                        <div className="flip-card-inner" >
                            <div className="flip-card-front" ><img src={Card1}></img></div>
                            <div className="flip-card-back" ><img src={Card1Back}></img></div>
                        </div>
                    </div>
                    
                    <div className="flip-card" >
                        <div className="flip-card-inner" >
                            <div className="flip-card-front" ><img src={Card2}></img></div>
                            <div className="flip-card-back" ><img src={Card2Back}></img></div>
                        </div>
                    </div>

                    <div className="flip-card" >
                        <div className="flip-card-inner" >
                            <div className="flip-card-front" ><img src={Card3}></img></div>
                            <div className="flip-card-back" ><img src={Card3Back}></img></div>
                        </div>
                    </div>

            </div>

            <div>
                <Reel />
            </div>

           
        </div>
    )
}