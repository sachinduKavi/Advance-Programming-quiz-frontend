import React, {Component, useState, useEffect, useRef, createRef} from 'react'
import CubeIcon from '../assets/icons/cube.svg'
import SettingsIcon from '../assets/icons/settings.svg'
import CrossIcon from '../assets/icons/cross.svg'
import FieldChoice from '../components/FieldChoice'
import {EditOutlined, DownOutlined, PhoneOutlined, InfoCircleOutlined, GlobalOutlined, FileTextOutlined, ProductOutlined, CheckOutlined, MailOutlined} from '@ant-design/icons'

import Content from '../components/Content'

import '../style/main-page.css'

export default function MainPage() {

    const [editable, setEditable] = useState<Boolean>(false)
    const [activePanel, setPanel] = useState<String>("Content")
    const [formList, setFormList] = useState<Component>() // Dynamic form list 
    const [choiceView, setChoiceView] = useState<Boolean>(false)


    const choiceRef = createRef()

    // Component did mount ?
    useEffect(() => {

    }, [])


  return (

    <div className='screen main-page'>
        <div className="row">

            {
                !editable ?
            

            <div className="panel">
                <div className="nav-bar">
                    <img src={CubeIcon} alt="cube icon" />

                    <p className='nav previous'>Dashboard &#10095;</p>
                    <p className='nav'>Form name</p>

                    <div className="last-element">
                        <img src={SettingsIcon} alt="settings" />
                    </div>
                    
                </div>

                <div className="navigation">
                    <div className={`inactive ${activePanel === 'Content' ? 'active': '' }`} onClick={() => {setPanel('Content')}}>Content</div>
                    <div className={`inactive ${activePanel === 'Design' ? 'active': '' }`} onClick={() => {setPanel('Design')}}>Design</div>
                    <div className={`inactive ${activePanel === 'Share' ? 'active': '' }`} onClick={() => {setPanel('Share')}}>Share</div>
                    <div className={`inactive ${activePanel === 'Replies' ? 'active': '' }`} onClick={() => {setPanel('Replies')}}>Replies</div>
                </div>


                <div className="editor-panel">
                    {activePanel === 'Content' && <Content newField={setChoiceView}/>}
                </div>



            </div>
            : <div className="panel">
                
            </div>
        }

            <div className="display">

            </div>

            {
                choiceView &&
                <div className="add-filed-pop" ref={ref}>
                    <div className="pop-up">
                        <div className="row space-between">
                            <h3 className='title'>Add Field</h3>
                            <img src={CrossIcon} alt="cross icon" className='cross-icon' onClick={() => setChoiceView(false)}/>
                        </div>
                    
                        <div className="content-grid">
                            <FieldChoice text='Multiple Choice' icon={<CheckOutlined/>}/>
                            <FieldChoice text='Short Text' icon={<EditOutlined/>}/>
                            <FieldChoice text='Email' icon={<MailOutlined/>}/>
                            <FieldChoice text='Drop Down' icon={<DownOutlined/>}/>
                            <FieldChoice text='Phone Number' icon={<PhoneOutlined/>}/>
                            <FieldChoice text='Section' icon={<ProductOutlined/>}/>
                            <FieldChoice text='Contact Information'  icon={<InfoCircleOutlined/>}/>
                            <FieldChoice text='Legal' icon={<FileTextOutlined/>}/>
                            <FieldChoice text='County' icon={<GlobalOutlined/>}/>

                        </div>
                    </div>
                </div>

            }

            
        </div>
    </div>
  )
}
