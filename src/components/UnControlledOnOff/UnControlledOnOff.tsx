import React, {useState} from "react";

type UnControlledOnOffPropsType = {
    //On: boolean
}

export function UnControlledOnOff(props: UnControlledOnOffPropsType) {


    let [on, setOn] = useState(false);
    console.log("on:  " + on);
    const onStale = {
        width: "50px",
        height: "30px",
        border: "1px solid black",
        display: "inline-block",
        padding: "2px",
        backgroundColor: on ? "green" : "white"
    };
    const offStale = {
        width: "50px",
        height: "30px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "2px",
        padding: "2px",
        backgroundColor: on ? "white" : "red"
    };
    const indicatorStyle = {
        width: "30px",
        height: "30px",
        borderRadius: "20px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        backgroundColor: on ? "green" : "red"
    };

    return (
        <div>
            <div style={onStale} onClick={() => {
                setOn(true)
            }}>On
            </div>
            <div style={offStale} onClick={() => {
                setOn(false)
            }}>Off
            </div>
            <div style={indicatorStyle}>.</div>
        </div>
    )
}

