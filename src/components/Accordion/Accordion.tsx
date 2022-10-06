import React from "react";

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onClick: (value: boolean) => void
}

function Accordion (props: AccordionPropsType) {
    console.log("Accordion rendering")

        return <div>
            <AccordionTitle title={props.titleValue} onClick={props.onClick} value={!props.collapsed}/>
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
    onClick: (value: boolean) => void,
    value: boolean

}

function AccordionTitle(props:AccordionTitlePropsType) {
    console.log("AccordionTitle rendering")
    return (
        <h3 onClick={() => {props.onClick (props.value)}}>---{props.title}---</h3>
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

export default Accordion;
