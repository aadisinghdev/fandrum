import React from 'react'
import { Image } from 'react-bootstrap'

const Cards = ({ title, url, img }) => {
    return (
        <div className="bg-success sm-img-show position-relative">
            <a href={url} target="_blank">
                <Image src={img} className="img-fluid w-100 h-100 object-cover" />
            </a>
            <a href={url} target="_blank" className="bg-danger text-white t-d-n img-show-content font-12">
                {title}
            </a>
        </div>
    )
}

export default Cards
