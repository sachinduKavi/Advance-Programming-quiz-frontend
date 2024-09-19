import React from 'react'
import ContentIcon from '../assets/icons/content.svg'

import '../style/content.css'

export default function Content() {
  return (
    <div className='content-border'>
        <div className="steps">
            <img src={ContentIcon} alt="content-icon" />
            <p>Steps</p>
        </div>

        <p className="steps-description">The steps users will take to complete the form</p>
    </div>
  )
}
