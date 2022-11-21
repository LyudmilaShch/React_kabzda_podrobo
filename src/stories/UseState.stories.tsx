import React, {useMemo, useState} from "react";

export default {
    title: 'UseState demo'
}

function generateData() {
    console.log("generateData")
    //difficult counting
    return 1;
}

export const Example1 = () => {
    console.log("Example1")
   // const initValue = useMemo(generateData, [])
    const [counter, setCounter] = useState(generateData)

    // const changer = (state: number) => state +1

    return <>
        <button onClick={() => setCounter(state => state+1)}>+</button>
        {counter}
    </>

}