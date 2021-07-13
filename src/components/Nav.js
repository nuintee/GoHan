import React from "react"
import { Link } from 'react-router-dom'

const Nav = (props) => {

    const { index } = props

    return (
        <nav className = 'l-nav nav-container'>
            <Link　to = '/' className = {index == 0 ? 'nav-button is-active' :'nav-button'}>ホーム</Link>
            <Link to = '/result' className = {index == 1 ? 'nav-button is-active' :'nav-button'}>結果</Link>
        </nav>
    )
}

export default Nav