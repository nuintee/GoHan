import React from 'react'

import { HiOutlineGlobeAlt as Globe } from 'react-icons/hi'
import { RiMapPin2Line as Pin } from 'react-icons/ri'
import { FiLink2 as URL } from 'react-icons/fi'

interface ItemProps {
    isNotify: boolean
    date: string
    setIsNotify: Function
    name: string
    type?: string
    image: string
    url: string
    cost?: number
    address: string
}

const Item = (props: ItemProps) => {
    const { isNotify, setIsNotify, name, type, cost, image, url, address } = props

    const CopyHandle = (e: React.MouseEvent<HTMLButtonElement>): void => {
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
            </div>
            <div className = 'l-item-button_group'>
                <a href = {`https://www.google.com/maps?q=${address}` || ''} target = '_blank' className = 'item-buttons'><Pin size = {20}/></a>
                <a href = {url || 'URL'} target = '_blank' className = 'item-buttons'><Globe size = {20}/></a>
                <button className = 'item-buttons' onClick = {(e) => CopyHandle(e)} value = {url} role = 'url_button'><URL size = {20}/></button>
            </div>
        </div>
    )
}

export default Item