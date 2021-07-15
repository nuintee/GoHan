import React, { useState } from 'react'
import { useHistory } from 'react-router'

const useSearch = () => {
    const [ isHover, setIsHover ] = useState(false)
    const history = useHistory()
    let randomInt;

    const PickData = (json) => {
        console.log(json)
        const shop = json.results.shop // Shops <Object>
        const random = shop[randomInt] // Actual Result <Object>
        SaveStorage(random)
    }


    const SaveStorage = (json) => { 
        JSON.stringify(json)
        localStorage.setItem(Date.now(),JSON.stringify(json))
    }

    const SearchData = (position) => {
        randomInt = Math.floor(shop.length * Math.random())// Random <Int>

        fetch(`https://food-server.glitch.me/?lat=${position.latitude}&lng=${position.longitude}&index=${randomInt}`)
        .then(res => res.json())
        .then(doc => {
            PickData(doc)
            history.push('/#result')
        })
    }

    return { PickData, SaveStorage, SearchData}
}

export default useSearch