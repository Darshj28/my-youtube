import React from 'react'
import { useSelector } from 'react-redux'

const SideBar = () => {
    const isMenuOpen = useSelector(store=> store.app.isMenuOpen);

    //early return pattern
    if(!isMenuOpen) return null;

  return ( 
    <div className='p-5 shadow-lg col-span-1 '>
        <h1 className='font-bold'>Subscription</h1>
        <ul>
            <li>Music</li>
            <li>Sports</li>
            <li>Movies</li>
            <li>Gaming</li>
        </ul>
        <h1 className='font-bold pt-5'>Subscription</h1>
        <ul>
            <li>Music</li>
            <li>Sports</li>
            <li>Movies</li>
            <li>Gaming</li>
        </ul>
        <h1 className='font-bold pt-5'>Subscription</h1>
        <ul>
            <li>Music</li>
            <li>Sports</li>
            <li>Movies</li>
            <li>Gaming</li>
        </ul>
    </div>
  )
}

export default SideBar