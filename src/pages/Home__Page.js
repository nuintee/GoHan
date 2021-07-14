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

    useEffect( () => {
       if ('geolocation' in navigator) {
           console.log('通信中')
           setIsNavi('loading')
           navigator.geolocation.getCurrentPosition(pos => {
                const { latitude, longitude } = pos.coords
                setPosition({latitude, longitude})
                setIsNavi(true)
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
            <Search condition = {isNavi} setIsNotify = {setIsNotify} position = {position} isNavi = {isNavi}/>
            {isNavi == 'loading' ? <Notification color = 'green' text = '位置情報を取得しています。'/> : null}
        </div>
        { isNotify ? <Notification setIsNotify = {setIsNotify}/> : null}
        <Powered />
        </>
    )
}

export default Home__Page