import React from 'react'

const Button = ({name}) => {
  return (
    <div>
        <button className='bg-slate-200 rounded-full px-5 py-2 m-2'>{name}</button>
    </div>
  )
}

export default Button