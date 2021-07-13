import React, { useState, useEffect } from 'react'

import Nav from '../components/Nav'
import Logo from '../components/Logo'
import Powered from '../components/Powered'
import Notification from '../components/Notification'
import Search from '../components/Search'

const Home__Page = () => {    
    const [ position, setPosition ] = useState()
    const [ isNavi, setIsNavi ] = useState(false)
    const [ isSearching, setIsSearching ] = useState(false)
    const [ isNotify, setIsNotify ] = useState(false)

    useEffect(() => {
        return () => {
            if ('geolocation' in navigator) {
                navigator.geolocation.getCurrentPosition(pos => {
                    setIsNavi(true)
                    const { latitude, longitude } = pos.coords
                    setPosition({latitude,longitude})
                },error => {
                    setIsNavi('error')
                    setIsNotify(true)
                })
            }
        }
    },[])

    return (
        <>
        <Nav index = {0}/>
        <div>
            <Logo />
            <Search isSearching = {isSearching} setIsSearching = {() => setIsSearching} isNavi = {isNavi} position = {position}/>
        </div>
        { isNavi == 'error' && isSearching && isNotify ? <Notification setIsNotify = {() => setIsNotify} setIsSearching = {() => setIsSearching}/> : null}
        <Powered />
        </>
    )
}

export default Home__Page