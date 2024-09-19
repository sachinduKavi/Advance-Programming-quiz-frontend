import React from 'react'
import ContentIcon from '../assets/icons/content.svg'
import SingleForm from './SingleForm'
import {PlusOutlined, CloudFilled, DeleteFilled} from '@ant-design/icons'

import {Input, Button} from 'antd'

import '../style/content.css'

export default function Content() {
  return (
    <div className='content-border'>
        <div className="main-content">
            <div className="steps">
                <img src={ContentIcon} alt="content-icon" />
                <p>Steps</p>
            </div>

            <p className="steps-description">The steps users will take to complete the form</p>


            <SingleForm/>
            <SingleForm/>
            <SingleForm/>


            <Button icon={<PlusOutlined/>} className='add-field-btn'>Add Field</Button>

            <hr />
        </div>

        <div className="content-footer">
            <Button icon={<CloudFilled/>} className='save-publish'>Save & Published</Button>
            <Button icon={<DeleteFilled/>} className='delete-btn'>Delete</Button>
        </div>
        
    </div>
  )
}
