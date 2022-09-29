import React, {useState} from "react";

type AccordionPropsType = {
    titleValue: string
    //collapsed: boolean
}

function UnControlledAccordion (props: AccordionPropsType) {
    console.log("Accordion rendering")

    let [collapsed, setCollapsed] = useState(true);

        return <div>
            <AccordionTitle title={props.titleValue}/>
            <button onClick={()=>{collapsed? setCollapsed(false) : setCollapsed(true)}}>TOGGLE</button>
            { collapsed && <AccordionBody />}
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
    title: string;
}

function AccordionTitle(props:AccordionTitlePropsType) {
    debugger
    console.log("AccordionTitle rendering")
    return (
        <h3>---{props.title}---</h3>
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

export default UnControlledAccordion;
