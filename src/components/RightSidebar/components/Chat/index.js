import React from 'react'

import home_1 from '../../../../assets/images/home/home_1.jpg'
import MessageNotify from '../../../common/MessageNotify'

const Chat = () => {
    return (
        <div>
            <div className="px-2">
                <h6 className="font-10 text-uppercase mt-3">Today</h6>
            </div>
            {/* user message notifications  */}
            <MessageNotify name='Emma Stone' message='Hey hi!' time='8h ago' img={home_1} />
            <MessageNotify name='billim ' message='how are you?' time='9h ago' img={home_1} />

            <div className="px-2">
                <h6 className="font-10 text-uppercase mt-3">Yesterday</h6>
            </div>

            <MessageNotify name='john ' message='Will call you ' time='9h ago' img={home_1} />
            <MessageNotify name='Emma ' message='Heyy you there?' time='21h ago' img={home_1} />
            <MessageNotify name='Emma ' message='how are you?' time='24h ago' img={home_1} />
            <MessageNotify name='Mark ' message='Hi what up ?' time='9h ago' img={home_1} />

        </div>
    )
}

export default Chat
