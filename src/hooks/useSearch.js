import React, { useState } from 'react'
import { useHistory } from 'react-router'

const useSearch = () => {
    const [ isHover, setIsHover ] = useState(false)
    const history = useHistory()
    let randomInt

    const PickData = (json) => {
        if (json) {
            const shop = json.results.shop // Shops <Object>
            if (shop.length > 0) {
                const random = Math.floor(shop.length * Math.random())
                const item = shop[random] // Actual Result <Object>
                SaveStorage(item)
            }
        }
    }

    const SaveStorage = (json) => { 
        JSON.stringify(json)
        localStorage.setItem(Date.now(),JSON.stringify(json))
    }

    const SearchData = (position) => {
        randomInt = Math.floor(100 * Math.random())// Random <Int>
        const startTime = performance.now()
        const timeout = setTimeout(`alert('5秒以上かかります。')`,5000)
        fetch(`https://food-server.glitch.me/?lat=${position.latitude}&lng=${position.longitude}&index=${randomInt}`)
        //fetch(`http://localhost:3000/?lat=${position.latitude}&lng=${position.longitude}&int=${randomInt}`)
        .then(res => res.json())
        .then(doc => {
            const endTime = performance.now()
            console.log( (endTime - startTime) / 1000 )
            clearTimeout(timeout)
            PickData(doc)
            window.location.href = '/#/result'
        })
    }

    return { PickData, SaveStorage, SearchData}
}

export default useSearch