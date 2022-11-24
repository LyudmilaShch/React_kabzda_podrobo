import React, {useEffect, useState} from "react";
import s from './Clock.module.css'

type PropsType = {}


export const Clock: React.FC<PropsType> = (props) => {
    const [date, setDate] = useState(new Date())
    useEffect(() => {
        const intervalId = setInterval(() => {
            setDate(new Date())
        }, 1000);

        return () => {
            clearInterval(intervalId)
        }

    }, [])

    const get2digitsString = (num: number) => num < 10
        ? "0" + num
        : num


    return <div className={s.clock}>
        <div className={s.hour + ' ' + s.hand} style={{transform: `translate(-50%) rotate(${date.getHours()/12 * 360}deg)`}}></div>
        <div className={s.minute  + ' ' + s.hand} style={{transform: `translate(-50%) rotate(${date.getMinutes()/60 * 360}deg)`}}></div>
        <div className={s.second  + ' ' + s.hand} style={{transform: `translate(-50%) rotate(${date.getSeconds()/60 * 360}deg)`}}></div>

        <div className={s.number + ' ' + s.number1}>
            <div>1</div>
        </div>
        <div className={s.number + ' ' + s.number2}>
            <div>2</div>
        </div>
        <div className={s.number + ' ' + s.number3}>
            <div>3</div>
        </div>
        <div className={s.number + ' ' + s.number4}>
            <div>4</div>
        </div>
        <div className={s.number + ' ' + s.number5}>
            <div>5</div>
        </div>
        <div className={s.number + ' ' + s.number6}>
            <div>6</div>
        </div>
        <div className={s.number + ' ' + s.number7}>
            <div>7</div>
        </div>
        <div className={s.number + ' ' + s.number8}>
            <div>8</div>
        </div>
        <div className={s.number + ' ' + s.number9}>
            <div>9</div>
        </div>
        <div className={s.number + ' ' + s.number10}>
            <div>10</div>
        </div>
        <div className={s.number + ' ' + s.number11}>
            <div>11</div>
        </div>
        <div className={s.number + ' ' + s.number12}>
            <div>12</div>
        </div>


    </div>
}