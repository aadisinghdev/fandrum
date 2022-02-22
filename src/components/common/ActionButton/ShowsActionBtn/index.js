import React from 'react'

const ShowsActionBtn = ({ url, image, title, imgAlt = "" }) => {
    return (
        <div className="flex-shrink-0  bg-white rounded-pill wh-45 mr-10 d-flex align-items-center justify-content-center">
            <a href={url} target={"_blank"} className="p-12 tooltip-hover">
                <img src={image} className="img-fluid" alt={imgAlt} />
                <div className="tooltip-inner">{title}</div>
            </a>
        </div>
    )
}

export default ShowsActionBtn
