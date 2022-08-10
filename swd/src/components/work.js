import React from "react";

export default function Work(){
    return(
        <div>
             <div className="flex flex-col justify-start mx-20 ">
                <hr className="bg-black border-black h-[1px] w-[100%] "></hr>
                <h2 className="text-[55px]">Work</h2>
            </div>
            
            <div className="flex flex-col justify-center">

                <div className="flex flex-row justify-center mb-10">

                    <div className="px-5">
                    <div className="h-[1100px] w-[800px]  bg-black"></div>
                    </div>

                    
                    <div className="px-5">
                      <div className="h-[1100px] w-[800px]  bg-black"></div>
                    </div>

                </div>

                <div className="flex justify-center">
                <div className="h-[1000px] w-[1650px] bg-black"></div>
                </div>

            </div>
            

        </div>
    )
}