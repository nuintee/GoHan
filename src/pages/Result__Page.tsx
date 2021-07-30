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
    const [ isNotify, setIsNotify ] = useState(false)

    const ItemRenderer = () => {

        interface Style {
            [key: string]: string
        }

        const noresults_style: Style = {
            position: 'absolute',
            top: `50%`,
            left: `50%`,
            transform: `translate(-50%,-50%)`
        }

        if (localStorage.length >= 1) {
            return <>
            {
                Object.keys(localStorage).map((key,index) => (
                    <Item
                        key = {index}
                        date = {key}
                        name = {JSON.parse(localStorage[key]).name}
                        image = {JSON.parse(localStorage[key]).photo.pc.l}
                        url = {JSON.parse(localStorage[key]).urls.pc}
                        address = {JSON.parse(localStorage[key]).address}
                        isNotify = {isNotify}
                        setIsNotify = {setIsNotify}
                    />
                )).sort((a,b): number => {
                    if (a.props.date > b.props.date) {
                        return -1
                    } else if (a.props.date < b.props.date) {
                        return 1
                    } else {
                        return 0
                    }
                })
            }
            </>
        }　else {
            return <p style = {noresults_style}>結果がありません。</p>
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
        {isNotify ? <Notification color = 'green' text = 'リンクをコピーしました。' setIsNotify = {setIsNotify}/> : null}
        <Powered />
        </>
    )
}

export default Result__Page