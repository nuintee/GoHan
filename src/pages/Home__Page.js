import React, { useState, useEffect } from 'react'

import Nav from '../components/Nav'
import Logo from '../components/Logo'
import Powered from '../components/Powered'
import Notification from '../components/Notification'
import Search from '../components/Search'

const Home__Page = () => {    
    const [ position, setPosition ] = useState()
    const [ isNavi, setIsNavi ] = useState(false)
    const [ isNotify, setIsNotify ] = useState(false)

    useEffect(() => {
            if ('geolocation' in navigator) {
                navigator.geolocation.getCurrentPosition(pos => {
                    setIsNavi(true)
                    const { latitude, longitude } = pos.coords
                    setPosition({latitude,longitude})
                },error => {
                    setIsNavi('error')
                })
            }
    },[])

    return (
        <>
        <Nav index = {0}/>
        <div>
            <Logo />
            <Search condition = {isNavi} setIsNotify = {setIsNotify} position = {position}/>
        </div>
        {/* { isNavi == 'error' && isSearching && isNotify ? <Notification setIsNotify = {() => setIsNotify} setIsSearching = {() => setIsSearching}/> : null} */}
        { isNotify ? <Notification setIsNotify = {setIsNotify}/> : null}
        <Powered />
        </>
    )
}

export default Home__Page