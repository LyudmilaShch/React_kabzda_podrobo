import React, {useState} from "react";

type ItemType = {
    title: string
    value: any
}

export type SelectPropsType = {
    value: any
    collapsed: boolean
    onChange: () => void
    onClick: (value: any) => void
    items: ItemType[]
}

export function Select(props: SelectPropsType) {

    return (
        <div>
            <SelectTitle title={(props.items.find(el => el.value === 1)).title}></SelectTitle>
            {!props.collapsed && <SelectList items={props.items} onClick={props.onClick} />}
            {/*<div>*/}
            {/*    value*/}
            {/*    /!*{props.items.find(el => el.value === props.value)}*!/*/}
            {/*</div>*/}
            {/*{props.items.map(i => <div>{i.title}</div>)}*/}

        </div>
    )
}

type SelectTitlePropsType = {
    title: any,
    onChange: () => void
}

function SelectTitle(props: SelectTitlePropsType){
    return (
        <h3 onClick={(e) => props.onChange()}>{props.title}</h3>
    )
}


export type SelectListPropsType= {
    items: ItemType[]
    onClick:(value: any) => void
}

function SelectList(props: SelectListPropsType){
    return (
        <div>
            {props.items.map((i, index) => <div onClick={() => {props.onClick(i.value)}} key={index}>{i.title}</div>)}
        </div>
    )
}