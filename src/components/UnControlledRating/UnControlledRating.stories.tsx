import React, {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {UnControlledRating} from "./UnControlledRating";
import {action} from "@storybook/addon-actions";


export default {
    title: 'components/Uncontrolled/UnControlledRating',
    component: UnControlledRating
    }  as ComponentMeta<typeof UnControlledRating>;

const callback = action("rating changed inside component")

const Template: ComponentStory<typeof UnControlledRating> = (args) => <UnControlledRating {...args} />;

export const UnControlledRatingEmpty = Template.bind({});
UnControlledRatingEmpty.args = {defaultValue: 0, onChange: callback}

export const UnControlledRating1 = Template.bind({});
UnControlledRating1.args = {defaultValue: 1, onChange: callback}

export const UnControlledRating2 = Template.bind({});
UnControlledRating2.args = {defaultValue: 2, onChange: callback}

export const UnControlledRating3 = Template.bind({});
UnControlledRating3.args = {defaultValue: 3, onChange: callback}

export const UnControlledRating4 = Template.bind({});
UnControlledRating4.args = {defaultValue: 4, onChange: callback}

export const UnControlledRating5 = Template.bind({});
UnControlledRating5.args = {defaultValue: 5, onChange: callback}
