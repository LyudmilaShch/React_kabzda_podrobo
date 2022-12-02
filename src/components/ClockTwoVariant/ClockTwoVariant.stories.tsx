import React from "react";
import {ClockTwoVariant} from "./ClockTwoVariant";



export default {
    title: 'ClockTwoVariant',
    component: ClockTwoVariant
}


export const BaseAnalogExample = () => {
    return <ClockTwoVariant mode={"analog"}/>

}

export const BaseDigitalExample = () => {
    return <ClockTwoVariant mode={"digital"}/>

}