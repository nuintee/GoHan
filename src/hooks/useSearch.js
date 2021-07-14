import React, { useState } from 'react'
import { useHistory } from 'react-router'

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

    const SearchData = (position) => {
        fetch(`https://food-server.glitch.me/?lat=${position.latitude}&lng=${position.longitude}`)
        .then(res => res.json())
        .then(doc => {
            PickData(doc)
            history.push('/result')
        })
    }

    return { PickData, SaveStorage, SearchData}
}

export default useSearch