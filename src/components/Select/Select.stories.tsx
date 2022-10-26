import React, {useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {Select} from "./Select";
import {action} from "@storybook/addon-actions";

export default {
    title: 'Select',
    component: Select,

} as ComponentMeta<typeof Select>;

export const WithValue = () => {
    const [value, setValue] = useState(2);
    return (<Select
        value={value}
        onChange={setValue}
        items={[
            {title: "Minsk", value: 1},
            {title: "Moscow", value: 2},
            {title: "Kiev", value: 3},
            {title: "Spb", value: 4},
            {title: "Bratsk", value: 5}
        ]}
    />)
}

export const WithoutValue = () => {
    const [value, setValue] = useState(null);
    return (
        <Select
            onChange={setValue}
            value={value}
            items={[
                {title: "Minsk", value: 1},
                {title: "Moscow", value: 2},
                {title: "Kiev", value: 3},
                {title: "Spb", value: 4},
                {title: "Bratsk", value: 5}
            ]}
        />)
}