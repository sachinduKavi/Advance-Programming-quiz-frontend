import React from 'react'
import DotsIcons from '../assets/icons/dots.svg'
import CrossIcon from '../assets/icons/cross.svg'

import '../style/single-form.css'


export default function SingleForm() {
  return (
    <div className='single-form'>
        <img src={DotsIcons} alt="" className="move" />
        <div className="content">
            Hello sachindu
        </div>
        <img src={CrossIcon} alt="" className="cross" />

    </div>
  )
}
