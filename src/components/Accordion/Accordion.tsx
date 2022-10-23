import React from "react";

type ItemType = {
    title: string
    value: any
}

export type AccordionPropsType = {
    titleValue: string
    /**
     * elements display
     */
    collapsed: boolean
    onChange: () => void
    items: ItemType[]
    onClick: (value: any) => void
    /**
     * optional color of header text
     */
    color: string
}

export function Accordion (props: AccordionPropsType) {
    console.log("Accordion rendering")

        return <div>
            <AccordionTitle title={props.titleValue} onChange={props.onChange} color={props.color}/>
            { !props.collapsed && <AccordionBody items={props.items} onClick={props.onClick}/>}
        </div>
    }


/*function Accordion2(props: AccordionPropsType) {
    console.log("Accordion rendering")
    if (props.collapsed === true) {
        return <div>
            <AccordionTitle title={props.titleValue}/>
        </div>
    } else {
       return <div>
        <AccordionTitle title={props.titleValue}/>
        <AccordionBody />
    </div>
}}*/

type AccordionTitlePropsType = {
    title: string,
    onChange: () => void,
    color?: string
}

function AccordionTitle(props:AccordionTitlePropsType) {
    console.log("AccordionTitle rendering")
    return (
        <h3 onClick={(e) => props.onChange()}  style={{color: props.color ? props.color : 'black'}}>---{props.title}---</h3>
    )
}

export type AccordionBodyPropsType = {
    items: ItemType[]
    onClick: (value: any) => void
}

function AccordionBody(props: AccordionBodyPropsType) {
    console.log("AccordionBody rendering")
    return (
        <ul>
            {props.items.map((i, index) => <li onClick={() => {props.onClick(i.value)}} key={index}>{i.title}</li>)}
        </ul>
    )
}
