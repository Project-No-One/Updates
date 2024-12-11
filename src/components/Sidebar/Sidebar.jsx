import React, {useState} from 'react'
import './Sidebar.css'
import {assets} from '../../assets/assets'

const Sidebar = () => {

  const [extended,setExtended] = useState(true)
  const [theme,setTheme] = useState(false)

  return (
      <div className='sidebar'>
            <div className="top">
                    <img onClick={ () => setExtended(prev=>!prev) } className='menu' src={assets.menu_icon} alt="Menu" />
                    <div className="new-chat">
                            <img src={assets.plus_icon} alt="" />
                            {extended?<p>   New Chat </p>:null}
                    </div>
                    {extended
                    ?<div className="recent">
                        <p className="recent-title">Recent</p>
                        <div className="recent-entry">
                            <img src={assets.message_icon} alt="" />
                            <p> What is React...</p>
                        </div>
                    </div>
                    :null
                    }
                    
            </div>      
            <div className="bottom">
                    <div className="bottom-item recent-entry" title="Help">
                            <img src={assets.question_icon} alt="" />
                            {extended?<p></p>:null}
                    </div>
                    <div onClick={() => setTheme(prev=>!prev)} className="bottom-item recent-entry" title="Themes">
                            <img src={assets.setting_icon} alt="" />
                            { extended?<p></p>:null }
                    </div>
                    <div className="bottom-item hover-dark" title="Dark Mode">
                            { theme ? <img src={assets.setting_icon} alt="" />:null}
                            { extended && theme ? <p></p> : null}
                    </div>
                    <div className="bottom-item hover-light" title="Light Mode">
                            { theme?<img src={assets.setting_icon} alt="" />:null}
                            { extended && theme ? <p></p> : null }
                    </div>
            </div>
      </div>
    )
}

export default Sidebar