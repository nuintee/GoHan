import React, { useState } from 'react'
import { useHistory } from 'react-router'

const useSearch = () => {
    const [ isSlow, setIsSlow ] = useState(false)
    const history = useHistory()
    let randomInt

    interface Result {
        results: {
            shop: []
        }
    }

    interface Coords {
        latitude: number
        longitude: number
    }

    const PickData = (json: Result) => {
        if (json) {
            const shop = json.results.shop // Shops <Object>
            if (shop.length > 0) {
                const random = Math.floor(shop.length * Math.random())
                const item = shop[random] // Actual Result <Object>
                SaveStorage(item)
            }
        }
    }

    const SaveStorage = (json: Result) => { 
        JSON.stringify(json)
        localStorage.setItem(Date.now().toString(),JSON.stringify(json))
    }

    const SearchData = (position: Coords) => {
        randomInt = Math.floor(100 * Math.random())// Random <Int>
        const startTime = performance.now()
        const timeout = setTimeout(() => setIsSlow(true),5000)
        fetch(`https://food-server.glitch.me/shops?lat=${position.latitude}&lng=${position.longitude}&index=${randomInt}`)
        .then(res => res.json())
        .then(doc => {
            setIsSlow(false)
            const endTime = performance.now()
            console.log( (endTime - startTime) / 1000 )
            clearTimeout(timeout)
            PickData(doc)
            window.location.href = '/#/result'
        })
    }

    return { PickData, SaveStorage, SearchData, isSlow}
}

export default useSearch