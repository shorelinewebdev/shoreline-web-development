import Logow from "../images/logow.png"

export default function Footer(){
    return(
        <div className="flex flex-col md:flex-row items-center md:justify-between w-[100vw] md:p-5 pb-10 bg-off-black">
            <img className="w-[50px] h-[auto] mb-10 md:mb-0 md:mx-5" src={Logow}></img>
            <p className="text-white ">©Shoreline Web Development 2022</p>
        </div>
    )
}