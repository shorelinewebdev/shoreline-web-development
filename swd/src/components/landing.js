import React from "react"
import ImageSlider from "./ImageSlider"
import LogoB from "../images/logob.png"
import { SliderData } from "./sliderData"
import Services from "./services";
import Work from "./work";

export default function Landing(props){

 
    return(
        <div>
             <div className="mb-20">

                <div className="flex flex-row justify-between p-5 items-center">
                <h1 className="font-main text-[30px]">Shoreline Web Developpment</h1>
                <img alt="logo-black" onClick={props.toggle}  src={LogoB} className="w-[45px] h-[36px] cursor-pointer "></img>
                </div>
                <div>
                    <ImageSlider slides={SliderData}/>
                </div>

                </div>

            <Services />
            <Work />
        </div>
       
    )
}