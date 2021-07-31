import React, { useState, useEffect } from 'react'

import Nav from '../components/Nav'
import Logo from '../components/Logo'
import Powered from '../components/Powered'
import Notification from '../components/Notification'
import Search from '../components/Search'
import Filter from '../components/Filter/Filter_Button'

import useSearch from '../hooks/useSearch'

import Modal from '../components/Filter/Modal'

const Home__Page = () => { 
    const { isSlow } = useSearch()
    const [ position, setPosition ] = useState({latitude: 0,longitude: 0})
    const [ isNavi, setIsNavi ] = useState('false')
    const [ isNotify, setIsNotify ] = useState(false)
    const [ budget, setBudget ] = useState(0)
    const [ radius, setRadius ] = useState(3)
    const [ isFilter, setIsFilter ]  = useState(-1)

    useEffect( () => {
       if ('geolocation' in navigator) {
           console.log('通信中')
           setIsNavi('loading')
           navigator.geolocation.getCurrentPosition(pos => {
                const { latitude, longitude } = pos.coords
                setPosition({latitude, longitude})
                setIsNavi('true')
           },error => {
                setIsNavi('error')
           })
       }
    },[])

    return (
        <>
        <Nav index = {0}/>
        <div className = 'l-home_middle'>
            <Logo />
            <Search condition = {isNavi} setIsNotify = {setIsNotify} position = {position} isNavi = {isNavi} role = 'button'/>
            <div className = 'l-filters_wrapper'>
                <div className = 'l-filters_group'>
                    <Filter name = '予算' setIsFilter = {setIsFilter} isFilter = {isFilter} data = {0}/>
                    <Filter name = '半径' setIsFilter = {setIsFilter} isFilter = {isFilter} data = {1}/>
                </div>
                {
                    isFilter >= 0 ?
                    <Modal
                        isFilter = {isFilter}
                        budget = {budget} 
                        setBudget = {setBudget} 
                        radius = {radius}
                        setRadius = {setRadius}
                    />
                    : null
                }
            </div>
            { isSlow ? <p>もうしばらくお待ちください。</p> : null}
            {isNavi == 'loading' ? <Notification  color = 'green' text = '位置情報を取得しています。' setIsNotify = {setIsNotify}/> : null}
        </div>
        { isNotify ? <Notification setIsNotify = {setIsNotify}/> : null}
        <Powered />
        </>
    )
}

export default Home__Page