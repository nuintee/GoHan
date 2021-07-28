import React from 'react'
import { Link } from 'react-router-dom'

const Powered = (props) => {
    const { url, name } = props

    return (
        <span className = 'powered-text'>
            Powered by
            <a href = {url || 'https://webservice.recruit.co.jp/doc/hotpepper/'} target = '_blank'>{name || ' ホットペッパーWebサービス'}</a>
        </span>
    )
}

export default Powered