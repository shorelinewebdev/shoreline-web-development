
import agpic from "../images/agpic.jpg"



export default function About(){
    return(
        <div className="h-[100%]  py-10 bg-off-black">


            <div className="flex flex-col md:flex-row justify-start py-10">

                <div id="left" className="w-[100%] md:w-[50%]"> 

                    <div className="mx-10 md:mx-20 mb-20">
                        <hr className="bg-white border-white h-[1px] w-[100%] "></hr>
                        <h2 className="text-[55px] text-white">About</h2>
                    </div>

                    <div className="px-10 lg:px-20 mb-20">
                        <p className="text-[30px]  lg:text-[40px] xl:text-[45px] pb-10 text-white">
                        Shoreline web development specilizes in making unique websites using modern technologies to meet any needs combining both desgin and development.
                        </p>
                    </div>


                </div>

                <div id="right" className="flex flex-col mx-0 md:mx-20 w-[80%] md:w-[50%] "> 

                    <div className="mx-10 md:mx-0 mb-20">
                        <hr className="bg-white border-white h-[1px] w-[100%] "></hr>
                        <h2 className="text-[55px] text-white">Team</h2>
                    </div>

                    <div className="flex flex-col md:flex-row justify-between  ">

                        <div className="text-white w-[100%] md:w-[40%] mx-10 md:mx-0">
                                <div className="w-[250px] h-[250px]"><img className="h-[250px] w-[100%] object-cover" src={agpic}></img></div>
                                    <h2 className="mt-5 text-[25px] ">Alexander Gifford</h2>
                                    <p className="mt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi </p>
                        </div>

                        <div className="text-white w-[100%] md:w-[40%] mx-10 md:mx-0 mt-20 md:mt-0">
                                <div className="w-[250px] h-[250px]"><img className="h-[250px] w-[100%] object-cover" src={agpic}></img></div>
                                    <h2 className="mt-5 text-[25px] ">Alexander Gifford</h2>
                                    <p className="mt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi </p>
                        </div>

                       

                    </div>
                   

                </div>

            </div>



           


         
        </div>
    )
}