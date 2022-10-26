import React, {useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {SelectHW} from "./SelectHW";



const GetCategoryObj = (categoryName: 'Colors' | 'Events' | 'Main') => ({
    table: {
        category: categoryName
    }
})

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'components/controlled/Select',
    component: SelectHW,

} as ComponentMeta<typeof SelectHW>;

export const SelectChangingHW = () => {
    const [value, setValue] = useState<boolean>(true);
    const [selectValue, setSelectValue] = useState<number>(0);
    const onClick = (newTitle: number) => {
        setValue(!value)
        setSelectValue(newTitle)
    }
    return <SelectHW
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
