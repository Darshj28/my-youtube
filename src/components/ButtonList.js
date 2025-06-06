import React from 'react'
// import Button from './Button'

const list = ["All","Gaming","Songs","Movies","News","Sports","Politics"];

const ButtonList = () => {
  
  return (
    // <div className='flex'>
    //     <Button name="All"/>
    //     <Button name="Gaming"/>
    //     <Button name="Songs"/>
    //     <Button name="Movies"/>
    //     <Button name="News"/>
    //     <Button name="Sports"/>
    //     <Button name="Politics"/>
    // </div>
    <div>
   {list.map((item, index)=>(
    <button className='bg-slate-200 rounded-full px-5 py-2 m-2' key={index} >{item}</button>
   ))}
    </div>
  )
}

export default ButtonList