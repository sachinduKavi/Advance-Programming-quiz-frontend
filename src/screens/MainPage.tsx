import React, {useState} from 'react'
import CubeIcon from '../assets/icons/cube.svg'
import SettingsIcon from '../assets/icons/settings.svg'

import Content from '../components/Content'

import '../style/main-page.css'

export default function MainPage() {

    const [editable, setEditable] = useState<Boolean>(false)
    const [activePanel, setPanel] = useState<String>("Content")


  return (
    <div className='screen main-page'>
        <div className="row">
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
                    {activePanel === 'Content' && <Content/>}
                </div>



            </div>

            <div className="display">

            </div>
        </div>
    </div>
  )
}
