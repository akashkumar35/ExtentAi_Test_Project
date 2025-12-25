import React from 'react'
import img1 from "../../src/Images/Logo.png"
import { useNavigate } from 'react-router-dom'

function Header() {
const menu = [
    {
        title:"HOME",
        link:"/"
    },
    {
        title:"EVENTS",
        link:"/"
    },
    {
        title:"PODCASTS",
        link:"/podcast"
    },
    {
        title:"ABOUT",
        link:"aboutus"
    }
]

const navigate = useNavigate()

const handlelink =(lin)=>{
navigate(lin)
}

  return (
    <div className=' bg-black'>
    <div>
        <div className='flex justify-between items-center'>
            <div className='w-[80%]'>
            <img src={img1} className=''/>
            </div>


<div className=' w-[20%]'>
    <div className='flex justify-between max-sm:hidden'>
    {menu.map((items,index)=>{
        return(
            <p className='text-[white] cursor-pointer  text-[14px]' key={index} onClick={()=>handlelink(items.link)}>{items.title}</p>
        )
    })}
    </div>
   
</div>



        </div>

    </div>
    </div>
  )
}

export default Header
