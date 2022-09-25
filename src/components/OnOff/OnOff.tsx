import React from "react";
import './OnOff.css'

type OnOffPropsType = {
    OnOrOff: boolean
}



export function OnOff(props: OnOffPropsType) {
    console.log("OnOff rendering")
    return (
        <div>
            {props.OnOrOff && <Green/>}
            {!props.OnOrOff && <Red/>}
        </div>
    )
}


function Green() {
    return (
        <div>
    <div className="rectangleGreen">on</div>
    <div className="rectangle">off</div>
    <div className="roundGreen"></div>
        </div>
)
}

function Red() {
    return (
        <div>
            <div className="rectangle">on</div>
            <div className="rectangleRed">off</div>
            <div className="roundRed"></div>
        </div>
    )
}
