import React from 'react'
import { Image } from 'react-bootstrap'
import home_1 from '../../../../assets/images/home/home_1.jpg'

const ProfileInfo = () => {
    return (
        <div className="py-1 px-3 d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center">
                <h6 className="font-12 text-dark mb-0 mr-5">Hi</h6>
                <h6 className="font-14 text-purple mb-0 fw-bolder">Alisha Sen</h6>
                <div className="pt-2 pl-2">
                    <a href="#">
                        <span className="material-icons icons_side_nav mr-5 text-secondary font-18">notifications</span>
                    </a>
                </div>
            </div>
            {/* Status of user */}
            <div className="d-flex align-items-center">
                <h6 className="font-12 text-dark mb-0 mr-5">Hi</h6>
                <h6 className="font-14  mb-0 fw-bolder mr-10">Online</h6>
                <div className="wh-45 bg-dark rounded-pill overflow-hidden user-image">
                    <Image src={home_1} alt="dsd" className="img-fluid h-100 object-cover" />
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo
