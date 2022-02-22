import React from 'react'
import ReactLoading from 'react-loading'

const Loader = () => {

    return (
        <div className='pt-50 pl-45 flex flex-wrap content-center justify-center w-100 h-100'>

            <div className='w-25 h4 item-center justify-center flex flex-column flex-wrap'>

                    <ReactLoading type='spinningBubbles' color='#dc3545' ></ReactLoading>

            </div>

        </div>
    )
}

export default Loader