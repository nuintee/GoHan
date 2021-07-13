import React from "react"
import { FaTimes as Cross } from 'react-icons/fa'

const Notification = (props) => {
    const { color, text } = props

    return (
        <div className = {color == 'green' ?  'l-notification notification-container green' : 'l-notification notification-container'}>
            <p className = 'notification-text'>{text || '位置情報を有効にしてください。'}</p>
            <button className = {color == 'green' ? 'notification-button green'  : 'notification-button' }><Cross size = {10}/></button>
        </div>
    )
}

export default Notification