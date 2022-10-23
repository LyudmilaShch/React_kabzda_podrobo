import React, {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {action} from "@storybook/addon-actions";
import {UnControlledOnOff} from "./UnControlledOnOff";


export default {
    title: 'components/Uncontrolled/UncontrolledOnOff',
    component: UnControlledOnOff
}  as ComponentMeta<typeof UnControlledOnOff>;

const callback = action("on or off clicked")

const Template: ComponentStory<typeof UnControlledOnOff> = (args) => <UnControlledOnOff {...args} />;

export const OnMode = Template.bind({});
OnMode.args = {
    defaultOn: true,
    onChange: callback
}
export const OffMode = Template.bind({});
OffMode.args = {
    defaultOn: false,
    onChange: callback
}