import React, { useState } from "react";

import { HiOutlineCurrencyYen as Yen } from 'react-icons/hi'
import { BiChevronUp as Up, BiChevronDown as Down } from 'react-icons/bi'

import './Filter.css'

interface Props {
    name: string
    setIsFilter: Function
    isFilter: number | boolean,
    data: number
}

const Filter_Button = (props: Props)  => {
    const { name, setIsFilter, isFilter, data } = props

    const ClickHandle = (e: React.FormEvent<HTMLButtonElement>) => {
        const target = e.currentTarget
        
        const del = () => {
            target.parentNode?.parentNode?.querySelectorAll('.filter_button').forEach(key => {
                key.classList.remove('active')
            })
        }

        if (target.classList.contains('active')){
            del()
            setIsFilter(-1)
        } 
        else {
          del()
          target.classList.add('active')
          setIsFilter(data)
        }

    }

    return (
        <div className = 'l-filter_group'>
            <button className = 'filter_button' onClick = {(e) => ClickHandle(e)} data-tab = {data}>
                <Yen />
                <p>{name || null}</p>
                <Down />
            </button>
        </div>
    )
}

export default Filter_Button