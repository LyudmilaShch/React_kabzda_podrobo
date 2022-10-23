import React, {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {OnOff} from "./OnOff";
import {action} from "@storybook/addon-actions";


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'components/controlled/OnOff',
    component: OnOff
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    }  as ComponentMeta<typeof OnOff>;

const callback = action("on or off clicked")

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof OnOff> = (args) => <OnOff {...args} />;

export const OnMode = Template.bind({});
OnMode.args = {
    on: true,
    onClick: callback
}
export const OffMode = () => <OnOff on={false} onClick={callback} />

//     Template.bind({});
// OffMode.args = {
//     on: false,
//     onClick: (x) => x
// }

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true);
    return <OnOff on={value} onClick={setValue} />
}
