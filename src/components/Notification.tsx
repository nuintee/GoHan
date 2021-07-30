import React from "react"
import { FaTimes as Cross } from 'react-icons/fa'

interface NotificationProps  {
    color?: string
    text?: string
    setIsNotify: Function
}

const Notification = (props: NotificationProps) => {
    const { color, text, setIsNotify } = props

    const ClickHandle = () => {
        setIsNotify(false)
    }

    return (
        <div className = {color == 'green' ?  'l-notification notification-container green' : 'l-notification notification-container'}>
            <p className = 'notification-text'>{text || '位置情報を有効にしてください。'}</p>
            <button className = {color == 'green' ? 'notification-button green'  : 'notification-button' } onClick = {ClickHandle}><Cross size = {10}/></button>
        </div>
    )
}

export default Notification