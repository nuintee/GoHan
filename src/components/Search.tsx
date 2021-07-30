import React, { useState } from "react"
import { useHistory } from "react-router-dom"
import { AiOutlineSearch as Icon } from 'react-icons/ai'
import { FiRefreshCw as Loading } from 'react-icons/fi'
import { FaHamburger as Type } from 'react-icons/fa'
import { BiCoin as Coin } from 'react-icons/bi' 
import useSearch from '../hooks/useSearch'

interface SearchProps {
    condition: string
    position: Position
    setIsNotify: Function
    isNavi: string
    role: string
}

interface Position {
    latitude: number
    longitude: number
}

const Search = (props: SearchProps) => {
    const history = useHistory()
    const { condition, position, setIsNotify, isNavi, role } = props
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
            <button className = "search-button" 
                    onClick = {Clicker}>
                    { isClicked ? <Loading size = {30} className = 'spin__animation' /> : <Icon size = {30} />}
            </button>
        </div>
    )
}

export default Search