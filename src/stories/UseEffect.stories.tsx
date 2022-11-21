import React, {useEffect, useMemo, useState} from "react";

export default {
    title: 'UseEffect demo'
}

export const SimpleExample = () => {
    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1)

    console.log("SimpleExample")
    useEffect(() => {
        console.log("UseEffect every render");
        document.title = counter.toString();
        //   api.getUsers().then('')
        //   setInterval
        //   indexedDB
        //   document.getElementId
        //   document.title = "User";
    },)

    useEffect(() => {
        console.log("UseEffect only first render (componentDidMount)");
        document.title = counter.toString();
    }, [])
    useEffect(() => {
        console.log("UseEffect first render and every counter change");
        document.title = counter.toString();
    }, [counter])


    return <>
        Hello, {counter} {fake}
        <button onClick={() => setFake(fake + 1)}>fake +</button>
        <button onClick={() => setCounter(counter + 1)}>counter +</button>
    </>

}

export const SetTimeOutExample = () => {
    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1)

    console.log("SetTimeOutExample")


    useEffect(() => {
        setTimeout(() => {
            console.log("setTimeOut")
            document.title = counter.toString();
        }, 1000)
    }, [counter])


    return <>
        Hello, {counter} {fake}
        <button onClick={() => setFake(fake + 1)}>fake +</button>
        <button onClick={() => setCounter(counter + 1)}>counter +</button>
    </>
}

export const SetIntervalExample = () => {
    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1)

    console.log("SetIntervalExample")


    useEffect(() => {
        setInterval(() => {
            console.log("setInterval " + counter)
            setCounter((state) => state + 1)
        }, 1000)
    }, [])


    return <>
        Hello, Counter: {counter}, fake: {fake}
    </>
}

export const ClockExample = () => {

    const [date, setDate] = useState(new Date())
    const seconds = date.getSeconds()
    const minutes = date.getMinutes()
    const house = date.getHours()


    useEffect(() => {
        console.log("ClockExample")
        setInterval(() => {
                setDate(new Date())
                    , 1000
            }
        );
    }, [])


    return <>
        {house}:{minutes}:{seconds}
    </>
}