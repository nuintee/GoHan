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
        return (
            <Item setIsCopied = {() => setIsCopied(true)} isCopied = {isCopied}/>
        )
    }

    return (
        <>
        <Nav index = {1}/>
        <div>
            <Logo />
            <ItemRenderer />
        </div>
        {isCopied ? <Notification color = 'green' text = 'リンクをコピーしました。'/> : null}
        <Powered />
        </>
    )
}

export default Result__Page