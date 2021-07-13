import React, { useState } from "react"
import { AiOutlineSearch as Icon } from 'react-icons/ai'
import { FiRefreshCw as Loading } from 'react-icons/fi'
import { FaHamburger as Type } from 'react-icons/fa'
import { BiCoin as Coin } from 'react-icons/bi' 

const Search = (props) => {
    const { isSearching, setIsSearching, isNavi } = props
    const [ isHover, setIsHover ] = useState(false)


    const ClickHanle = () => {
        if (isNavi == 'error') {
            setIsSearching(true)
        } else if (isNavi) {
            setIsSearching(true)
            setIsHover(false)
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
                    onClick = {ClickHanle}>
                    {isSearching && isNavi != 'error' ? <Loading size = {30} className = 'spin__animation' /> : <Icon size = {30} />}
            </button>
        </div>
    )
}

export default Search