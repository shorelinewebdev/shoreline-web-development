

export default function About(){
    return(
        <div className="w-[100%] h-[100%] bg-off-black">
             <div className="flex flex-col justify-start mx-10 md:mx-20 py-10 mb-5 ">
                <hr className="bg-white border-white h-[1px] w-[100%] "></hr>
                <h2 className="text-[55px] text-white">About</h2>
            </div>
            <div className="px-10 md:px-20">
                <p className="text-[30px] md:text-[50px] lg:text-[65px] xl:text-[85px] text-white">
                Shoreline web development specilizes in making unique websites using modern technologies to meet any needs combining both desgin and development.
                </p>
            </div>
        </div>
    )
}