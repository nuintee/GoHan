import React from 'react'
import { Link } from 'react-router-dom'

import Nav from '../components/Nav'
import Logo from '../components/Logo'
import Powered from '../components/Powered'
import Notification from '../components/Notification'
import Search from '../components/Search'

const Result__Page = () => {
    return (
        <>
        <Nav index = {1}/>
        <div>
            <Logo />
            <Search />
        </div>
        <Powered />
        </>
    )
}

export default Result__Page