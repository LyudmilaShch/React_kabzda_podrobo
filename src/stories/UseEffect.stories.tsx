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

export const SetIntervalOneExample = () => {
    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1)

    console.log("SetIntervalOneExample")


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
    const [counter, setCounter] = useState(1)

    console.log("SetIntervalExample")

    useEffect(() => {
        const intervalId = setInterval(() => {
            console.log("setInterval " + counter)
            setCounter((state) => state + 1)
        }, 1000)

        return () => {
            clearInterval(intervalId)
        }
    }, [])


    return <>
        Hello, Counter: {counter}
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

export const ResetEffectExample = () => {
    const [counter, setCounter] = useState(1)
    console.log("ResetEffectExample " + counter)
    useEffect(() => {
        console.log("Effect occurred " + counter)

        return () => {
            console.log("RESET EFFECT " + counter)
        }
    }, [counter])


    const increase = () => {
        setCounter(counter + 1)
    }
    return <>
        Hello, {counter}
        <button onClick={increase}>counter +</button>
    </>
}

export const KeyTrackerExample = () => {
    const [text, setText] = useState('')
    console.log("KeyTrackerExample " + text)

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            console.log(e.key)
            setText(text + e.key)
        }
        window.addEventListener('keypress', handler)
        return () => {
            window.removeEventListener('keypress', handler)
        }
    }, [text])


    return <>
        Typed text: {text}
    </>
}

export const SetTimeOutExample = () => {
    const [text, setText] = useState('')
    console.log("SetTimeOutExample " + text)

    useEffect(() => {

        const timeoutId = setTimeout(() => {
            console.log('TIMEOUT EXPIRED')
            setText('3 seconds passed')
        }, 3000)
        return () => {
            clearTimeout(timeoutId)
        }
    }, [text])


    return <>
        text: {text}
    </>
}