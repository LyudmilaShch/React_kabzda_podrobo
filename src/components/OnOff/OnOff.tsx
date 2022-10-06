import React, {useState} from "react";

type OnOffPropsType = {
    value: boolean,
    onClick: (value: boolean) => void
}

export function OnOff(props: OnOffPropsType) {
    console.log("OnOff rendering");

    /*let [on, setOn] = useState<boolean>(props.value);*/
    console.log("on:  " + props.value);
    const onStale = {
        width: "50px",
        height: "30px",
        border: "1px solid black",
        display: "inline-block",
        padding: "2px",
        backgroundColor: props.value ? "green" : "white"
    };
    const offStale = {
        width: "50px",
        height: "30px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "2px",
        padding: "2px",
        backgroundColor: props.value ? "white" : "red"
    };
    const indicatorStyle = {
        width: "30px",
        height: "30px",
        borderRadius: "20px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        backgroundColor: props.value ? "green" : "red"
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

