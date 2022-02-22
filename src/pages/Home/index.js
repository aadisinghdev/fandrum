import React from 'react'
import { useHistory } from 'react-router-dom'
import Loader from '../../utils/Loader'

const Home = () => {
    const history = useHistory()
    history.push('/movie')
    return <Loader />
}
export default Home
