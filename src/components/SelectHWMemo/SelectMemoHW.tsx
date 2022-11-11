import React, {useState, KeyboardEvent, useEffect, MouseEventHandler, useMemo} from "react";
import s from './SelectMemoHW.module.css'

type ItemType = {
    title: string
    countryId: number
    citizens: number
    value: any
}

export type SelectPropsType = {
    value?: any
    onChange: (value: any) => void
    items: ItemType[]
}

export function SelectMemoHW(props: SelectPropsType) {
    const [active, setActive] = useState(false)
    const [hoveredElementValue, setHoveredElementValue] = useState(props.value)

    const selectedItem = useMemo( () => props.items.find(i => i.value === props.value), [props.value]);
   // const selectedItem = props.items.find(i => i.value === props.value)

    //const hoveredItem = props.items.find(i => i.value === hoveredElementValue)
    const hoveredItem = useMemo( () =>  props.items.find(i => i.value === hoveredElementValue), [hoveredElementValue]);

    useEffect(() => {
        setHoveredElementValue(props.value);
    }, [props.value])

    const toggleItems = () => setActive(!active)

    const onItemClick = (value: any) => {
        console.log('onItemClick')
        props.onChange(value);
        toggleItems();
    }


    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === "ArrowDown" || e.key === "ArrowUp") {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].value === hoveredElementValue) {
                    const pretendentElement = e.key === "ArrowDown"
                        ? props.items[i + 1]
                        : props.items[i - 1]

                    if (pretendentElement) {
                        props.onChange(pretendentElement.value);
                        return;
                    }
                }
            }
            if (!selectedItem) {
                props.onChange(props.items[0].value);
            }
        }

        if (e.key === "Enter" || e.key === "Escape") {
            setActive(false)
        }
    }

    return (
        <>
            <div className={s.select} onKeyUp={onKeyUp} tabIndex={0}>
                <span className={s.main} onClick={toggleItems}>{selectedItem && selectedItem.title}</span>
                {
                    active &&
                    <div className={s.items}>
                        {props.items.map(i => <div
                            onMouseEnter={() => {
                                setHoveredElementValue(i.value)
                            }}
                            className={s.item + " " + (hoveredItem === i ? s.selected : " ")}
                            key={i.value}
                            onClick={() => {onItemClick(i.value)}}
                        >
                            {i.title}
                        </div>)}
                    </div>
                }

            </div>
        </>
    )
}