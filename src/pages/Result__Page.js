import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

import { BiCoin as Coin } from 'react-icons/bi' 
import { FaHamburger as Type } from 'react-icons/fa'

import Nav from '../components/Nav'
import Logo from '../components/Logo'
import Powered from '../components/Powered'
import Notification from '../components/Notification'
import Search from '../components/Search'

const Result__Page = () => {

    useEffect(() => {
        return () => {
            if (localStorage) {
                Object.keys(localStorage).map(key => {
                    console.log(JSON.parse(localStorage.getItem(key)))
                })
            }
        }
    },[])

    const Item = () => {
        return (
            <div className = 'l-item-container item-container'>
                <img className = 'l-item-image' src = 'https://i.ibb.co/Tb8pRLR/healthy-eating-ingredients-1200x628-facebook-1200x628.jpg'/>
                <div className = 'l-item-text_group'>
                    <p className = 'item-title'>NYC Chop Salad</p>
                    <div className = 'l-item-conditions_group'>
                        <span className = 'l-item-conditions'>
                            <i className = 'item-icons'><Type size = {20}/></i>
                            <p className = 'item-condition'>重め</p>
                        </span>
                        <span className = 'l-item-conditions'>
                            <i className = 'item-icons'><Coin size = {25}/></i>
                            <p className = 'item-condition'>¥2000</p>
                        </span>
                    </div>
                </div>
                <div className = 'l-item-button_group'>
                    <button className = 'item-buttons'>L</button>
                    <button className = 'item-buttons'>S</button>
                    <button className = 'item-buttons'>W</button>
                </div>
            </div>
        )
    }

    const ItemRenderer = () => {
        return (
            <p>Render</p>
        )
    }

    return (
        <>
        <Nav index = {1}/>
        <div>
            <Logo />
            <Item />
        </div>
        <Powered />
        </>
    )
}

export default Result__Page