import React from 'react'
import {StarOutlined} from '@ant-design/icons'
import DotsIcons from '../assets/icons/dots.svg'
import CrossIcon from '../assets/icons/cross.svg'

import '../style/single-form.css'


export default function SingleForm(props: any) {
  if(props.type !== undefined) {
    return (
      <div className='single-form'>
        <StarOutlined/>
        <div className="content">
            {props.title}
        </div>
      </div>
    )
  }

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
