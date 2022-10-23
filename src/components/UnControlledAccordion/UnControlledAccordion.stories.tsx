import React, {useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {action} from "@storybook/addon-actions";
import {UnControlledAccordion} from "./UnControlledAccordion";


export default {
    title: 'UnControlledAccordion',
    component: UnControlledAccordion
} as ComponentMeta<typeof UnControlledAccordion>;

export const MenuCollapsedMode = () => <UnControlledAccordion titleValue={'Menu'}/>

