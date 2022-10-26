import React, {useState} from "react";
import s from './SelectHW.module.css'

type ItemType = {
    title: string
    value: any
}

export type SelectPropsType = {
    valueTitle: any
    collapsed: boolean
    onChange: () => void
    onClick: (value: any) => void
    items: ItemType[]
}

export function SelectHW(props: SelectPropsType) {
    let SelectedItem = props.items.find(el => el.value === props.valueTitle)
    const selectClass = s.selectList
        + (!props.collapsed ? ' ' + s.open : '')
    return (
        <div>
            <div><SelectTitle title={SelectedItem ? SelectedItem.title : " "}
                                                        onChange={props.onChange}></SelectTitle></div>
            <div className={selectClass}> {!props.collapsed && <SelectList items={props.items} onClick={props.onClick}/>} </div>

        </div>
    )
}

type SelectTitlePropsType = {
    title: any,
    onChange: () => void
}

function SelectTitle(props: SelectTitlePropsType) {
    return (
        <h3 onClick={(e) => props.onChange()} className={s.selectTitle}>{props.title} <i className={s.arrowDown}></i></h3>
    )
}


export type SelectListPropsType = {
    items: ItemType[]
    onClick: (value: any) => void
}

function SelectList(props: SelectListPropsType) {

    return (
        <div>
            {props.items.map((i, index) => <div onClick={() => {
                props.onClick(i.value)
            }} key={index}>{i.title}</div>)}
        </div>
    )
}