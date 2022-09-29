import React from "react";
import './OnOffHomeWork.css'

type OnOffHomeWorkPropsType = {
    OnOrOff: boolean
}

export function OnOffHomeWork(props: OnOffHomeWorkPropsType) {
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
