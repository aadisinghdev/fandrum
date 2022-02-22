import React from 'react'
import { Image } from 'react-bootstrap'
import crossRed from '../../../assets/images/home/cross-red.png'

const MessageNotify = ({ name, time, img, message }) => {
    return (
        <div className="bg-white d-flex align-items-center justify-content-between chat-user-listing">
        <div className="d-flex position-relative">
            <div className="wh-55 bg-dark rounded-pill overflow-hidden user-image">
                <Image src={img} className="img-fluid" />
            </div>
            <div className="online-tic"></div>
            <div className="pl-10 pt-2">
                <h5 className="text-blue mb-0 font-16">{name}</h5>
                <p className="text-secondary mb-0 font-14">{message}</p>
            </div>
        </div>
        <div className="d-flex align-items-center">
            <div className="pl-10">
                <h6 className="text-secondary font-10 mb-0">{time}</h6>
            </div>
            <div className="wh-20">
                <a href="#">
                    <Image src={crossRed} className="img-fluid" />
                </a>
            </div>
        </div>
    </div>
    )
}

export default MessageNotify
