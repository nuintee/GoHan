import React from 'react'

import { BiCoin as Coin } from 'react-icons/bi' 
import { FaHamburger as Type } from 'react-icons/fa'
import { HiOutlineGlobeAlt as Globe } from 'react-icons/hi'
import { RiMapPin2Line as Pin } from 'react-icons/ri'
import { FiLink2 as URL } from 'react-icons/fi'

const Item = (props) => {
    const { isNotify, setIsNotify, name, type, cost, image, url, address } = props

    const CopyHandle = (e) => {
        //setIsCopied(true)
        console.log(e.target)
        setIsNotify(true)
        navigator.clipboard.writeText(url)
    }

    return (
        <div className = 'l-item-container item-container'>
            <img className = 'l-item-image' src = {image || 'https://i.ibb.co/Tb8pRLR/healthy-eating-ingredients-1200x628-facebook-1200x628.jpg'}/>
            <div className = 'l-item-text_group'>
                <p className = 'item-title'>{name || '名前'}</p>
                {/* <div className = 'l-item-conditions_group'>
                    <span className = 'l-item-conditions'>
                        <i className = 'item-icons'><Type size = {20}/></i>
                        <p className = 'item-condition'>重め</p>
                    </span>
                    <span className = 'l-item-conditions'>
                        <i className = 'item-icons'><Coin size = {25}/></i>
                        <p className = 'item-condition'>¥2000</p>
                    </span>
                </div> */}
            </div>
            <div className = 'l-item-button_group'>
                <a href = {`https://www.google.com/maps?q=${address}` || null} target = '_blank' className = 'item-buttons'><Pin size = {20}/></a>
                <a href = {url || 'URL'} target = '_blank' className = 'item-buttons'><Globe size = {20}/></a>
                <button className = 'item-buttons' onClick = {CopyHandle} value = {url}><URL size = {20}/></button>
            </div>
        </div>
    )
}

export default Item