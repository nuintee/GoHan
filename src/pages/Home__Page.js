import React from 'react'

import Nav from '../components/Nav'
import Logo from '../components/Logo'
import Powered from '../components/Powered'
import Notification from '../components/Notification'
import Search from '../components/Search'

const Home__Page = () => {

    return (
        <>
        <Nav index = {0}/>
        <div>
            <Logo />
            <Search />
        </div>
        <Notification　/>
        <Powered />
        </>
    )
}

export default Home__Page