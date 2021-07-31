import React, { useState } from 'react'
import { CSSProperties } from 'react'

import './Filter.css'

interface Props {
    budget: number
    setBudget: Function
    radius: number
    setRadius: Function
    isFilter: number
}


class Obj {
    unit: string
    min: number
    step: number
    max: number
    func: Function
    prev: number

    constructor(obj: Obj){
        this.unit = obj.unit
        this.min = obj.min
        this.step = obj.step
        this.max = obj.max
        this.func = obj.func
        this.prev = obj.prev
    }
}


const Modal = (props: Props) => {
    const { budget, setBudget, radius, setRadius, isFilter } = props

    const obj = [
        {
            unit: '¥',
            min: 0,
            step: 1000,
            max: 100000,
            func: setBudget,
            prev: budget
        },
        {
            unit: 'km',
            min: 0,
            step: 1,
            max: 10,
            func: setRadius,
            prev: radius
        }
    ]

    // Instanciated Dynamically
    const oby = new Obj(obj[isFilter])

    const InputHandle = (e: React.FormEvent<HTMLInputElement>) => {
        oby.func(e.currentTarget.value)
        e.currentTarget.value = oby.prev.toString()
    }

    const bubble_style: {[key: string]: string} = {
        position: 'absolute',
        top: `40px`,
        left: `${oby.prev / oby.max * 100}%`,
        transform: `translateX( -50% )`,
        display: 'flex',
        flexWrap: 'no-wrap',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        boxSizing: 'border-box',
        width: `500px`    
    }

    return (
        <div className = 'l-filter_modal'>
            <div className  = 'l-filter_indicators'>
                <p>{oby.unit == '¥' ? `${oby.unit} ${oby.min}` : `${oby.min} ${oby.unit}`}</p>
                <p>{oby.unit == '¥' ? `${oby.unit} ${oby.max}` : `${oby.max} ${oby.unit}`}</p>
            </div>
            <div className = 'l-filter_input-group'>
                <input type = 'range' className = 'filter_range' step = {oby.step} min = {oby.min} max = {oby.max} onInput = {(e) => InputHandle(e)} value = {oby.prev}/>
                <div className = 'l-filter_bubble' style = {bubble_style}>
                    <div className = 'filter_bubble_triangle'></div>
                    <div className = 'filter_bubble_body'>
                        <p>{oby.unit == '¥' ? `${oby.unit} ${oby.prev}` : `${oby.prev} ${oby.unit}`}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal