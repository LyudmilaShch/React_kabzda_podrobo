import React, {useState} from "react";

type OnOffPropsType = {
    on: boolean,
    onClick: (on: boolean) => void
}

export function OnOff(props: OnOffPropsType) {
    console.log("OnOff rendering");

    /*let [on, setOn] = useState<boolean>(props.value);*/
    console.log("on:  " + props.on);
    const onStale = {
        width: "50px",
        height: "30px",
        border: "1px solid black",
        display: "inline-block",
        padding: "2px",
        backgroundColor: props.on ? "green" : "white"
    };
    const offStale = {
        width: "50px",
        height: "30px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "2px",
        padding: "2px",
        backgroundColor: props.on ? "white" : "red"
    };
    const indicatorStyle = {
        width: "30px",
        height: "30px",
        borderRadius: "20px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        backgroundColor: props.on ? "green" : "red"
    };

    return (
        <div>
            <div style={onStale} onClick={() => {
                props.onClick(true)
            }}>On
            </div>
            <div style={offStale} onClick={() => {
                props.onClick(false)
            }}>Off
            </div>
            <div style={indicatorStyle}>.</div>
        </div>
    )
}

export const OnOffMemo = React.memo(OnOff)