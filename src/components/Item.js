import React from 'react'

import { BiCoin as Coin } from 'react-icons/bi' 
import { FaHamburger as Type } from 'react-icons/fa'
import { HiOutlineGlobeAlt as Globe } from 'react-icons/hi'
import { RiMapPin2Line as Pin } from 'react-icons/ri'
import { FiLink2 as URL } from 'react-icons/fi'

const Item = (props) => {
    const { setIsCopied, isCopied } = props

    const CopyHandle = () => {
        setIsCopied(true)
    }

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
                <button className = 'item-buttons'><Pin size = {20}/></button>
                <button className = 'item-buttons'><Globe size = {20}/></button>
                <button className = 'item-buttons' onClick = {CopyHandle}><URL size = {20}/></button>
            </div>
        </div>
    )
}

export default Item