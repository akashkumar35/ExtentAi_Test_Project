import React from 'react'
import img2 from "../../src/Images/Moon.png"
import img3 from "../../src/Images/Galaxy.png"
import img4 from "../../src/Images/DhruvaFinal.png"

function Landing() {
  return (
    <div className='mt-10'>
      <div className='w-[100%] bg-black max-sm:flex  max-sm:flex-col-reverse '> 
        <div className='text-[white] text-start max-sm:text-center'>
            <h1 className='font-bold text-[75px] max-sm:text-[59px]'>LETS TRAVEL TO THE EDGE  OF SPACE</h1>
            <p className='text-[25px] max-sm:mt-6'>We are agroup that love to explore and learn new information related to our universe.</p>
            <p className='text-[25px]'>Join us and Explore</p>
            <button className='border-2 border-white bg-black p-3 mt-5'>DISCOVER MORE</button>
        </div>
        <div className='flex justify-end max-sm:justify-center items-center'>
        <img src={img2} className='w-[500px]' />
        </div>

      </div>
      <div className='max-sm:mt-20'>
        <p className='text-start text-[20px] text-white'>RECENT EVENTS</p>
        <div   className=" w-full bg-contain max-sm:bg-cover bg-center flex justify-end max-sm:justify-center items-center p-20 max-sm:p-2 mt-5" style={{ backgroundImage: `url(${img3})` }}>
        <div className="w-[35%] max-sm:w-[90%] bg-white/30 text-[white] text-start p-4">
            <p>18/6/2023</p>
            <p>TALK ON COSMIC NEBULA</p>
           <p>
           Lorem ipsum dolor sit amet consectetur. Augue duis etiam pulvinar duis interdum accumsan tempor bibendum amet. Lorem ipsum dolor sit amet consectetur. Augue duis etiam pulvinar duis interdum accumsan tempor bibendum amet.Lorem ipsum dolor sit amet consectetur. Augue duis etiam pulvinar duis interdum accumsan tempor bibendum amet.
           </p>
           <button className='text-black bg-white p-2'>Read More</button>
        </div>

      </div>
      </div>
      <div>
            <h1 className='text-white mt-20 text-[25px]'>Know More About Us Here</h1>
        </div>

      <div className='flex max-sm:flex-col mt-20'>
       
            <div className='w-[20%] max-sm:w-[100%]  flex justify-center items-center'>
<img src={img4} className='w-[60%]'/>
            </div>
            <div className='w-[80%] max-sm:w-[100%] max-sm:mt-8 text-start max-sm:text-center  text-white'>
               <h1 className='text-[40px] max-sm:text-[35px]'>WE ARE CLUB THAT LEARN, SHARE AND EXPLORE EVERYTHING RELATED TO OUR UNIVERSE.</h1>

               <p className='text-[25px] max-sm:text-[20px]'>Dhruva is a College club, we work toward increasing knowledge about space, cosmos and everything we are still learning about. We share and learn together.</p>
            </div>
      </div>

      <div className='mt-20 flex justify-center items-center'>
<p className='text-[23px] text-white'>Astronomy compels the soul to look upwards and leads us from this world to another</p>
      </div>
      
    </div>
  )
}

export default Landing
