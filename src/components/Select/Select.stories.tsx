import React, {useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {action} from "@storybook/addon-actions";
import {Select} from "./Select";
import {Rating, RatingValueType} from "../Rating/Rating";


const GetCategoryObj = (categoryName: 'Colors' | 'Events' | 'Main') => ({
    table: {
        category: categoryName
    }
})

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'components/controlled/Select',
    component: Select,

} as ComponentMeta<typeof Select>;

export const ModeChanging: ComponentStory<typeof Select> = (args) => {
    const [value, setValue] = useState<boolean>(false);
    return <Select {...args} valueTitle={1} collapsed={value} onChange={() => setValue(!value)}/>
}

ModeChanging.args = {
    items: [
        {title: "Lyuda", value: 1},
        {title: "Archi", value: 2},
        {title: "Pusyao", value: 3},
        {title: "Yulya", value: 4}
    ],
    onClick: (newtitle) => {
        alert(newtitle)
    }
}


export const SelectChanging = () => {
    const [value, setValue] = useState<boolean>(true);
    const [selectValue, setSelectValue] = useState<number>(0);
    const onClick = (newTitle: number) => {
        setValue(!value)
        setSelectValue(newTitle)
    }
    return <Select
        valueTitle={selectValue}
        collapsed={value}
        onChange={() => setValue(!value)}
        onClick={onClick}
        items={[
            {title: "none", value: 0},
            {title: "Lyuda", value: 1},
            {title: "Archi", value: 2},
            {title: "Pusyao", value: 3},
            {title: "Yulya", value: 4}
        ]}
    />
}
