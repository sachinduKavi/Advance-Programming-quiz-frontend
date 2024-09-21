import React, {useState, useRef} from 'react'
import {SettingOutlined, DeleteFilled, PlusOutlined, UploadOutlined, AlignLeftOutlined} from '@ant-design/icons'
import { Button, Input, Switch } from 'antd'
import CrossIcon from '../../assets/icons/cross.svg'

import '../../style/multi-choice.css'


export default function MultiChoice() {
    interface Choice {
        answer: string
        selected: boolean
    }

    const imageRef = useRef<HTMLInputElement | null>(null)
    const [choices, setChoices] = useState<Array<Choice>>([])
    const [uploadImage, setUploadImage] = useState<Blob | MediaSource | null>(null)
    

  return (
    <div className='multi-choice'>
        <div className="row setting-row" >
            <div className="column">
                <div className="row details">
                    <SettingOutlined/>
                    <h4>Settings</h4>
                </div>

                <p className='form-type'>MultipleChoice</p>
            </div>

            <Button className='square-btn'>
                <img src={CrossIcon} alt="cross icon" />
            </Button>
            
        </div>


        <div className="content">
            <p>title</p>
            <Input/>

            <p>description</p>
            <Input/>


            <p>choice</p>

            {
                choices.map((element, index) => {
                    return (
                        <div className="row" key={index}>
                            <Input value={element.answer} onChange={(e) => {
                                const updateChoice = [...choices]
                                updateChoice[index].answer = e.target.value
                                setChoices(updateChoice)
                            }}/> 
                            <Button className='square-btn' onClick={() => {
                                const updateChoice = [...choices]
                                updateChoice.splice(index, 1)
                                setChoices(updateChoice)
                            }}><DeleteFilled/></Button>
                        </div>
                    )
                })
            }
            

            <Button className='square-btn delete-btn' onClick={() => {
                setChoices([...choices, {
                    answer: '',
                    selected: false
                }])
            }}><PlusOutlined style={{color: 'white'}}/></Button>


            <div className="row selection-row">
                <p>allow multiple selection</p>
                <Switch size='small'/>
            </div>

            <div className="row selection-row">
                <p>required</p>
                <Switch size='small'/>
            </div>

            
            <div className="row selection-row">
                <p>link</p>
                

                <Button icon={<UploadOutlined/>} className='upload-btn' onClick={() => {
                    // Select image from user computer
                    imageRef.current?.click()
                }}>Upload</Button>
            </div>

            <div className="selected-image">
                {
                    uploadImage &&
                    <img src={URL.createObjectURL(uploadImage)} alt="" />
                }
            </div>
            
            <div className="row selection-row">
                <p>placement</p>

                <div className="row" style={{width: 'fit-content'}}>
                    <Button><AlignLeftOutlined/><div className='black-box'></div></Button>
                    <Button><div className='black-box'></div><AlignLeftOutlined/></Button>
                </div>
            </div>
        </div>

        <div className="final-button row">
            <Button className='save-btn'>Save</Button>
            <Button className='delete-button'>Delete</Button>
        </div>

        <input type="file" accept='image/*' style={{visibility: 'hidden'}} ref={imageRef} onChange={(e) =>  {
            // Get the file selected 
            const selectedFile: File | null = e.target.files ? e.target.files[0] : null
            if(selectedFile !== null)
                setUploadImage(selectedFile)
            
        }}/>

    </div>
  )
}
