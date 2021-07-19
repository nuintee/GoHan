import React, { useState } from "react"
import { useHistory } from "react-router-dom"
import { AiOutlineSearch as Icon } from 'react-icons/ai'
import { FiRefreshCw as Loading } from 'react-icons/fi'
import { FaHamburger as Type } from 'react-icons/fa'
import { BiCoin as Coin } from 'react-icons/bi' 
import useSearch from '../hooks/useSearch'

const Search = (props) => {
    const history = useHistory()
    const { condition, position, setIsNotify, isNavi } = props
    const [ isClicked, setIsClicked ] = useState(false)
    const { SearchData } = useSearch()

    const Clicker = () => {
        if (condition == 'error') {
            setIsNotify(true)
        } else if (condition != 'loading') {
            setIsClicked(true)
            SearchData(position)
        }
    }

    return (
        <div className = "l-search">
            {/* <div　className = { isHover ? "search-appear left" : "search-appear"}>
                <Type size = {30} color = "C4C4C4"/>
            </div>
            <div　className = { isHover ? "search-appear right" : "search-appear"}>
                <Coin size = {40} color = "C4C4C4"/>
            </div> */}
            <button className = "search-button" 
                    // onMouseEnter = {() => { isSearching && isNavi != 'error' ? setIsHover(false) : setIsHover(true)}}
                    onClick = {Clicker}>
                    {/* {isSearching && isNavi != 'error' ? <Loading size = {30} className = 'spin__animation' /> : <Icon size = {30} />} */}
                    { isClicked ? <Loading size = {30} className = 'spin__animation' /> : <Icon size = {30} />}
            </button>
        </div>
    )
}

export default Search