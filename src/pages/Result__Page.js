import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


import Nav from '../components/Nav'
import Logo from '../components/Logo'
import Powered from '../components/Powered'
import Notification from '../components/Notification'
import Search from '../components/Search'
import Item from '../components/Item'

const Result__Page = () => {
    const [ isCopied, setIsCopied ] = useState(false)

    useEffect(() => {
        return () => {
            if (localStorage) {
                Object.keys(localStorage).map(key => {
                    console.log(JSON.parse(localStorage.getItem(key)))
                })
            }
        }
    },[])

    const ItemRenderer = () => {
        if (localStorage) {
            return Object.keys(localStorage).map(key => (
                <Item 
                    name = {JSON.parse(localStorage[key]).name}
                    url = {JSON.parse(localStorage[key]).urls.pc}
                    image = {JSON.parse(localStorage[key]).photo.pc.l}
                />
            ))
        }
    }

    return (
        <>
        <Nav index = {1}/>
        <div className = 'l-logo_content'>
            <Logo />
            <div className = 'l-result-scroll'>
                <ItemRenderer />
            </div>
        </div>
        {isCopied ? <Notification color = 'green' text = 'リンクをコピーしました。'/> : null}
        <Powered />
        </>
    )
}

export default Result__Page