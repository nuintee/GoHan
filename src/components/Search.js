import React, { useState } from "react"
import { AiOutlineSearch as Icon } from 'react-icons/ai'
import { FaHamburger as Type } from 'react-icons/fa'
import { BiCoin as Coin } from 'react-icons/bi' 

const Search = () => {
    const [ isHover, setIsHover ] = useState(false)
    // MouseEnter (Add Class left and right)
    // MouseLeave

    return (
        <div className = "l-search" onMouseLeave = {() => {setIsHover(false)}}>
            <div　className = { isHover ? "search-appear left" : "search-appear"}>
                <Type size = {30} color = "C4C4C4"/>
            </div>
            <div　className = { isHover ? "search-appear right" : "search-appear"}>
                <Coin size = {40} color = "C4C4C4"/>
            </div>
            <button className = "search-button" 
                    onMouseEnter = {() => {setIsHover(true)}}>
                    <Icon size = {50}/>
            </button>
        </div>
    )
}

export default Search