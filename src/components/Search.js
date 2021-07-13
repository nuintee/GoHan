import React, { useState } from "react"
import { useHistory } from "react-router-dom"
import { AiOutlineSearch as Icon } from 'react-icons/ai'
import { FiRefreshCw as Loading } from 'react-icons/fi'
import { FaHamburger as Type } from 'react-icons/fa'
import { BiCoin as Coin } from 'react-icons/bi' 

const Search = (props) => {
    const { isSearching, setIsSearching, isNavi, position } = props
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


    return (
        <div className = "l-search" onMouseLeave = {() => {setIsHover(false)}}>
            <div　className = { isHover ? "search-appear left" : "search-appear"}>
                <Type size = {30} color = "C4C4C4"/>
            </div>
            <div　className = { isHover ? "search-appear right" : "search-appear"}>
                <Coin size = {40} color = "C4C4C4"/>
            </div>
            <button className = "search-button" 
                    onMouseEnter = {() => { isSearching && isNavi != 'error' ? setIsHover(false) : setIsHover(true)}}
                    onClick = {ClickHandle}>
                    {isSearching && isNavi != 'error' ? <Loading size = {30} className = 'spin__animation' /> : <Icon size = {30} />}
            </button>
        </div>
    )
}

export default Search