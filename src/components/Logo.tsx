import React from 'react'

import GoHan from '../images/GoHan_Logo.png'

const Logo = () => {
    return (
        <div className = "l-logo">
            <img src = {GoHan} className = "logo-image"/>
            <p className = "logo-text">もう食事で迷わない。</p>
        </div>
    )
}

export default Logo