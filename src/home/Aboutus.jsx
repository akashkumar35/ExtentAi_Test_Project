import React from 'react'
import img1 from "../../src/Images/DhruvaFinal.png"
import img2 from "../../src/Images/Aboutus.png"
import img3 from "../../src/Images/Aboutusteam.png"

function Aboutus() {
    const array = [
        {
             image:img3
        },
        {
            image:img3
       },
       {
        image:img3
   },
   {
    image:img3
},
{
    image:img3
},
{
    image:img3
},
{
    image:img3
},
{
    image:img3
},
{
    image:img3
},
{
    image:img3
},
    ]
  return (
    <div className='mt-20'>
        <div className='w-[100%] flex justify-start ml-4'><p className='text-white font-bold text-[30px]'>ABout Us</p></div>
     <div className='flex mt-10 max-sm:flex-col '>
        <div className='w-[50%] max-sm:w-[100%] flex justify-center items-center'>
<img src={img1} className=''/>
        </div>
        <div className='w-[50%] flex max-sm:w-[100%] max-sm:text-center max-sm:mt-6 items-center justify-start text-start'>
<p className='text-white '>Lorem ipsum dolor sit amet consectetur. Diam donec egestas est leo malesuada massa quisque vitae at. Aliquet scelerisque magna nulla aenean euismod sed. Adipiscing placerat quisque eu rhoncus consequat.Lorem ipsum dolor sit amet consectetur. Diam donec egestas est leo malesuada massa quisque vitae at. Aliquet scelerisque magna nulla aenean euismod sed. Adipiscing placerat quisque eu rhoncus consequat.Lorem ipsum dolor sit amet consectetur. Diam donec egestas est leo malesuada massa quisque vitae at. Aliquet scelerisque magna nulla aenean euismod sed. Adipiscing placerat quisque eu rhoncus consequat.Lorem ipsum dolor sit amet consectetur. Diam donec egestas est leo malesuada massa quisque vitae at. Aliquet scelerisque magna nulla aenean euismod sed. Adipiscing placerat quisque eu rhoncus consequat.Lorem ipsum dolor sit amet consectetur. Diam donec egestas est leo malesuada massa quisque vitae at. Aliquet scelerisque magna nulla aenean euismod sed. Adipiscing placerat quisque eu rhoncus consequat.</p>
        </div>
     </div>
     <div className='w-[100%] mt-20 flex justify-center items-center'>
<img src={img2} className='w-[100%]' />
     </div>
     <div className='mt-20'>
        <h1 className='text-white text-[40px]'>TEAM LEADERS OF OUR CLUb</h1>
     </div>
<div className='flex flex-wrap max-sm:flex-col justify-center items-center gap-2 w-[100%]'> 
{array.map(()=>{
    return(
        <div className='w-[12%] max-sm:w-[100%] max-sm:flex max-sm:flex-col max-sm:items-center'>
            <img src={img3} className='w-[90%]'/>
            <div className='w-[100%] flex justify-center items-center text-white mt-2'>
                <p>NAME</p>
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

export default Aboutus
