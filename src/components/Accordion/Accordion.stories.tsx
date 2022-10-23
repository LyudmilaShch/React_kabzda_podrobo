import React, {useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {action} from "@storybook/addon-actions";
import {Accordion, AccordionPropsType} from "./Accordion";
import {Rating} from "../Rating/Rating";

const GetCategoryObj = (categoryName: 'Colors' | 'Events' | 'Main') => ({
    table: {
        category: categoryName
    }
})

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'components/controlled/Accordion',
    component: Accordion,
    argTypes: {
        color: {
            control: 'color',
            ...GetCategoryObj('Colors')
        },
        onChange: {
            ...GetCategoryObj('Events')
        },
        titleValue: {
            ...GetCategoryObj('Main')
        },
        collapsed: {
            ...GetCategoryObj('Main')
        }
    },
} as ComponentMeta<typeof Accordion>;

const callback = action("accordion mode change fired")

const Template: ComponentStory<typeof Accordion> = (args) => <Accordion {...args} />
const callbacksProps = {onChange: callback}


export const MenuCollapsedMode = Template.bind({})
MenuCollapsedMode.args = {
    titleValue: 'Menu',
    collapsed: true,
    ...callbacksProps
}


export const UsersUncollapsedMode = Template.bind({})
UsersUncollapsedMode.args = {
    titleValue: 'Users',
    collapsed: false,
    ...callbacksProps
}


export const ModeChanging: ComponentStory<typeof Accordion> = (args) => {
    const [value, setValue] = useState<boolean>(true);
    return <Accordion {...args} collapsed={value} onChange={() => setValue(!value)}/>
}

ModeChanging.args = {
    titleValue: 'Users'
}
