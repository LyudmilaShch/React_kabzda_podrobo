import React, {useMemo, useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {SelectMemoHW} from "./SelectMemoHW";

export default {
    title: 'SelectMemoHW',
    component: SelectMemoHW,

} as ComponentMeta<typeof SelectMemoHW>;

export const Value = () => {
    const [includesM, setIncludesM] = useState(1);
    const [citiesFromRussia, setCitiesFromRussia] = useState(1);
    const [moreMillion, setMoreMillion] = useState(1);
    const cities = ([
        {title: "Bratsk", countryId: 1, citizens: 242604, value: 1},
        {title: "Krasnoyarsk", countryId: 1, citizens: 1000007, value: 2},
        {title: "Minsk", countryId: 2, citizens: 1975000, value: 3},
        {title: "Grodno", countryId: 2, citizens: 1006614, value: 4},
        {title: "Moscow", countryId: 1, citizens: 12635466, value: 5},
        {title: "Gomel", countryId: 2, citizens: 503984, value: 6}
    ])
    const arrayIncludesM = useMemo(() => {
        console.log("arrayIncludesM")
        const arrayIncludesM = cities.filter(u => u.title.toLowerCase().indexOf("m") > -1)
        return arrayIncludesM
    }, [cities])
    const arrayCitiesFromRussia = useMemo(() => {
        console.log("arrayCitiesFromRussia")
        const arrayCitiesFromRussia = cities.filter(u => u.countryId === 1)
        return arrayCitiesFromRussia
    }, [cities])
    const citizensMoreMillion = useMemo(() => {
        console.log("citizensMoreMillion")
        const citizensMoreMillion = cities.filter(u => u.citizens >= 1000000)
        return citizensMoreMillion
    }, [cities])



    return (
        <>
            <SelectMemoHW
                value={includesM}
                onChange={setIncludesM}
                items={arrayIncludesM}
            />
            <br/>
            <SelectMemoHW
                value={citiesFromRussia}
                onChange={setCitiesFromRussia}
                items={arrayCitiesFromRussia}
            />
            <br/>
            <SelectMemoHW
                value={moreMillion}
                onChange={setMoreMillion}
                items={citizensMoreMillion}
            />

        </>

    )
}
