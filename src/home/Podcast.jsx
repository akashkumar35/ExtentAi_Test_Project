import React from 'react'
import img1 from "../../src/Images/Podcastimage.png"
import img2 from "../../src/Images/Podcastsecond.png"
import img3 from "../../src/Images/Podcastthird.png"
import img4 from "../../src/Images/podcastfour.png"

function Podcast() {

    const data = [
        {
            serial:"01",
            image:img3,
            text:"SPACEBUZZ EP 1"
        },
        {
            serial:"02",
            image:img4,
            text:"SPACEBUZZ EP 2"
        },
        {
            serial:"03",
            image:img3,
            text:"SPACEBUZZ EP 3"
        },
        {
            serial:"04",
            image:img4,
            text:"SPACEBUZZ EP 4"
        }
    ]
  return (
    <div>
        <div className='flex justify-center mt-4 items-center'>
            <h1 className='text-white text-[100px] max-sm:text-[68px]'>PODCAST</h1>
        </div>
        <div className='flex justify-center items-center'>
<img src={img1} className=' '/>
        </div>
        <div className='flex justify-center mt-20 items-center'>
<img src={img2} className=' '/>
        </div>
        <div className='flex mt-20 max-sm:flex-col '>
            <div className='w-[50%] max-sm:w-[100%] flex justify-center p-10 items-center'>
                <h1 className='text-[white] font-bold text-[70px]'>PODCAST OF THE WEEK</h1>
            </div>
            <div className='w-[50%] max-sm:w-[100%] text-start max-sm:text-center flex justify-center flex-col items-start max-sm:items-center'>
               
                <p className='text-[white] text-[20px]'>Lorem ipsum dolor sit amet consectetur. Diam donec egestas est leo malesuada massa quisque vitae at. Aliquet scelerisque magna nulla aenean euismod sed. Adipiscing placerat quisque eu rhoncus consequat.</p>
                <button className='text-white border-2 border-white p-2 mt-3 rounded-[10px]'> Learn More</button>
            </div>
            

        </div>
        <div className='mt-20 flex   flex-wrap justify-center items-center p-10 max-sm:p-1'>
            {data?.map((item,index)=>{
                return(
                    <div className='w-[40%]  max-sm:w-[100%] m-12 flex border-2 border-b-white border-t-0 pb-10  border-r-0 border-l-0'>
                    <div className='w-[40%]  flex justify-around items-center'>
                        <p className='text-white text-[20px] font-bold '>{item.serial}.</p>
                        <img src={item.image} className='w-[60%]' />
                    </div>
                    <div className='w-[50%]  flex justify-center items-center'>
    <p className='text-white font-bold  text-[20px]'>{item.text}</p>
                    </div>
    
                </div>
                )
            })}

          

        </div>
        <div className='mt-20 flex justify-center items-center'>
<p className='text-[23px] text-white'>Astronomy compels the soul to look upwards and leads us from this world to another</p>
      </div>
  
    </div>
  )
}

export default Podcast
