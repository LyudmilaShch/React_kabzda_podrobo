import React from "react";

export type AccordionPropsType = {
    titleValue: string
    /**
     * elements display
     */
    collapsed: boolean
    onChange: () => void
    /**
     * optional color of header text
     */
    color: string
}

export function Accordion (props: AccordionPropsType) {
    console.log("Accordion rendering")

        return <div>
            <AccordionTitle title={props.titleValue} onChange={props.onChange} color={props.color}/>
            { !props.collapsed && <AccordionBody />}
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

function AccordionBody() {
    console.log("AccordionBody rendering")
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}
