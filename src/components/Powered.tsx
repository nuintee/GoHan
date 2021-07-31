import React from 'react'

interface PoweredProps {
    [key: string]: string
}

const Powered = (props: PoweredProps) => {
    const { url, name } = props

    return (
        <span className = 'powered-text'>
            Powered by
            <a href = {url || 'https://webservice.recruit.co.jp/doc/hotpepper/'} target = '_blank'>{name || ' ホットペッパーWebサービス'}</a>
        </span>
    )
}

export default Powered