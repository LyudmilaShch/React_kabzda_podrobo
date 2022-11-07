import React, {ChangeEvent, useMemo, useState} from "react";

export default {
    title: 'useMemoHW'
}

export const DifficultCountingExample = () => {

    const [a, setA] = useState<number>(5)
    const [b, setB] = useState<number>(5)
    let resultA = 1;
    let resultB = 1;
    resultA = useMemo(() => {
        let tempResultA = 1
        for (let i = 1; i <= a; i++) {
            let fake = 0;
            while (fake < 10000000) {
                fake++
                const fakeValue = Math.random()
            }
            tempResultA = tempResultA * i;
        }
        return tempResultA
    }, [a]);


    for (let i = 1; i <= b; i++) {
        resultB *= i;
    }

    return <>
        <input value={a} onChange={(e) => setA(Number(e.currentTarget.value))}/>
        <input value={b} onChange={(e) => setB(+e.currentTarget.value)}/>
        {/*+тоже самое, что и number*/}
        <hr/>
        <div>
            Result for a: {resultA}
        </div>
        <div>
            Result for b: {resultB}
        </div>
    </>

}


const CitiesSecret = (props: { cities: Array<{city: string, countryId: number, citizens: number}>}) => {
    console.log("CITIES SECRET")
    return <div>
        {props.cities.map((u, i) => <div key={i}>{u.city}</div>)}
    </div>
}

const Cities = React.memo(CitiesSecret)

export const HelpsToReactMemo = () => {
    console.log("HelpsToReactMemo")
    const [counter, setCounter] = useState(0)
    const [cities, setCities] = useState([
        {city: "Bratsk", countryId: 1, citizens: 242604},
        {city: "Krasnoyarsk", countryId: 1, citizens: 1000007},
        {city: "Minsk", countryId: 2, citizens: 1975000},
        {city: "Grodno", countryId: 2, citizens: 1006614},
        {city: "Moscow", countryId: 1, citizens: 12635466},
        {city: "Gomel", countryId: 2, citizens: 503984}
    ])
    const arrayIncludesM = useMemo(() => {
        console.log("arrayIncludesM")
        const arrayIncludesM = cities.filter(u => u.city.toLowerCase().indexOf("m") > -1).map(el => (
            <option>
                {el.city}
            </option>
        ))
        return arrayIncludesM
    }, [cities])
    const arrayCitiesFromRussia = useMemo(() => {
        console.log("arrayCitiesFromRussia")
        const arrayCitiesFromRussia = cities.filter(u => u.countryId === 1).map(el => (
            <option>
                {el.city}
            </option>
        ))
        return arrayCitiesFromRussia
    }, [cities])
    const citizensMoreMillion = useMemo(() => {
        console.log("citizensMoreMillion")
        const citizensMoreMillion = cities.filter(u => u.citizens >= 1000000).map(el => (
            <option>
                {el.city}
            </option>
        ))
        return citizensMoreMillion
    }, [cities])
    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        {counter}
        <br/>
        <div>Includes m</div>
        <select onChange={()=> console.log("includesM")}>
            {arrayIncludesM}
        </select>

        <br/>
        <div>Cities from russia</div>
        <select >
            {arrayCitiesFromRussia}
        </select>

        <div>Cities citizens more than 1000000</div>
        <select >
            {citizensMoreMillion}
        </select>
    </>

}