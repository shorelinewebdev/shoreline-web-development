import React from 'react'
import { SliderData } from './sliderData'
import Arrow1 from '../images/arrow1.png'
import Arrow2 from '../images/arrow2.png'


const ImageSlider = ({slides}) => {

    const [current, setCurrent] = React.useState(0)
    const length = slides.length

    
      const nextSlide = () => {
        setCurrent(current === length -1 ? 0 : current + 1)
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    if(!Array.isArray(slides) || slides.length <= 0){
        return null
    }

 

  return (
    <div className='overflow-x-hidden mt-20 mb-20 md:mt-0 md:mb-0 h-[100%]' >

        <div className=' overflow-hidden h-[100%] md:h-[100vh] mb-20 md:mb-0'>
        {SliderData.map((slide, index)=> {
        return(
        <div className={index === current ? 'opacity-1 duration-1000 ' : 'opacity-0 duration-1000'} key={index} >
            
            
            {index === current && (<video  muted autoPlay loop playsInline> <source src={slide.video} type="video/mp4"></source> </video>)}
            
            
            </div>
        )
         })}

        </div>
       

    <div className='flex justify-between  '>
            <div className='px-5'>
            {SliderData.map((slide, index)=> {
        return(
        <div key={index} >
            
            
            {index === current && (<p>{slide.name}</p>)}
            
            
            </div>
        )
        })}
                {SliderData.map((slide, index)=> {
        return(
        <div key={index} >
            
            
            {index === current && (<p>{slide.desc}</p>)}
            
            
            </div>
            )
            })}
        </div>
        <div className='flex flex-row px-5'>
            <img src={Arrow1} onClick={prevSlide}  ></img>
            <img src={Arrow2} onClick={nextSlide}  ></img>
        </div>
       
     </div>
    </div>
  )
}

export default ImageSlider

