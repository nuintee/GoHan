import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

const useSearch = () => {
    const [ isHover, setIsHover ] = useState(false)
    const history = useHistory()

    const PickData = (json) => {
        const shop = json.results.shop
        const index = Math.floor(shop.length * Math.random())
        const random = shop[index]
        SaveStorage(random)
    }

    const SaveStorage = (json) => { 
        JSON.stringify(json)
        localStorage.setItem(Date.now(),JSON.stringify(json))
    }

    const ClickHandle = () => {
        if (isNavi == 'error') {
            setIsSearching(true)
        } else if (isNavi) {
            setIsSearching(true)
            setIsHover(false)
            fetch(`http://localhost:3000/?lat=${position.latitude}&lng=${position.longitude}`)
            .then(res => res.json())
            .then(doc => PickData(doc))
            
            history.push('/result')
        }
    }
}

export default useSearch