

export default function Contact(){
    return(
        <div>
            <div className="w-[100vw]  bg-off-black py-20">
                    <div className="flex flex-col justify-start mx-10 md:mx-20  mb-20 ">
                        <hr className="bg-white border-white h-[1px] w-[100%] "></hr>
                        <h2 className="text-[50px] text-white">Get Started</h2>
                    </div>

                    <div className="flex flex-col items-center">

                        <div className="items-center text-center">
                        <p className="text-[#777777]">Email:</p>
                        <p className="text-white text-[20px] md:text-[50px] mb-10 hover:scale-105 cursor-pointer transition-transform	 duration-200"> build@shorelineweb.dev</p>
                        <p className="text-[#777777]">Instagram:</p>
                        <p className="text-white text-[20px] md:text-[50px]  hover:scale-105 cursor-pointer transition-transform  duration-200">@shorelinewebdev</p>
                        </div>

                      

                    </div>


            </div>
        </div>
    )
}