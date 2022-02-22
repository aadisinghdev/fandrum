import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'


const VideoPopup = ({ showVideoPopup, hideBanerVideoPopup, youtubeUrl }) => {
    
    const { title, videoUrl } = youtubeUrl
    return (
        // <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <Modal show={showVideoPopup} onHide={hideBanerVideoPopup} className="modal-xxl">

            <Modal.Header closeButton>
                {/* <Modal.Title className="modal-title text-white">{title}</Modal.Title> */}
            </Modal.Header>


            <Modal.Body className="p-0">
                {/* <div className="modal-header border-0 modal-xxl">
                        <h5 className="modal-title text-white">Modal title</h5>

                    </div> */}
                {/* <div className="modal-body bg-dark p-0"> */}
                <iframe
                    // src={`https://www.youtube.com/watch?v=${videoUrl}`}
                    // src={`https://www.youtube.com/embed/watch?v=${videoUrl}`}
                    src={`https://www.youtube.com/embed/${videoUrl}`}
                    className="embed-responsive-item w-100 h-100"
                    style={{ "minHeight": "500px" }}
                    frameBorder="0"
                    autoPlay={"0"}
                    showinfo={"0"}
                    controls={"0"}
                    allow=""
                    allowFullScreen="allowFullScreen">
                </iframe>

                {/* <iframe width="100%" height="100%" src="//www.youtube.com/embed/qUJYqhKZrwA?autoplay=0&showinfo=0&controls=0" 
                frameBorder="0" allowFullScreen /> */}


                {/* </div> */}

                {/* <div className="modal-dialog modal-xxl">
                    <div className="modal-content">
                        <div className="modal-header border-0">
                            <h5 className="modal-title text-white">Modal title</h5>

                        </div>
                        <div className="modal-body bg-dark p-0">
                            <iframe className="embed-responsive-item w-100 h-100" style={{ "minHeight": "500px" }} src="https://www.youtube.com/embed/watch?v=npnp--SSx_8"
                                allowfullScreen="allowfullScreen"></iframe>
                        </div>
                    </div>
                </div> */}
            </Modal.Body>



        </Modal>
        // </div>
    )
}

export default VideoPopup
