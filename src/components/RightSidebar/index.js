import React, { useContext } from 'react'

import search from '../../assets/images/home/search.png'
import crossRed from '../../assets/images/home/cross-red.png'
import home_1 from '../../assets/images/home/home_1.jpg'
import caretDown from '../../assets/images/home/caret-down.png'
import message from '../../assets/images/home/message.png'
import ProfileInfo from './components/Profile'
import Chat from './components/Chat'
import { Image } from 'react-bootstrap'
import Context from '../../store/context'

const RightSidebar = (props) => {
    const { globalState, globalDispatch } = useContext(Context);

    return (
        <div className={`chat-section ${globalState.chatCustomClass}`}>

            {/* profile info-section */}
            {/* <ProfileInfo /> */}

            {/* Chat header section */}
            {/* <div className="bg-white py-1 px-3 d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center">
                    <div className="wh-15 mr-10">
                        <a href="#">
                            <Image src={message} className="img-fluid" />
                        </a>
                    </div>
                    <h6 className="font-14 text-danger mb-0">Messages</h6>
                </div>
                <div className="d-flex align-items-center">
                    <div className="wh-15">
                        <a href="#">
                            <Image src={search} className="img-fluid" />
                        </a>
                    </div>
                    <div className="wh-35">
                        <a href="#">
                            <Image src={caretDown} className="img-fluid" />
                        </a>
                    </div>
                </div>
            </div> */}

            {/* Chat section */}
            {/* <Chat /> */}
        </div>

    )
}

export default RightSidebar