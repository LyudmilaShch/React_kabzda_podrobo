import React, {useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {action} from "@storybook/addon-actions";
import {Accordion} from "./Accordion";



// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Accordion',
    component: Accordion
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Accordion>;

const callback = action("accordion mode change fired")

export const MenuCollapsedMode = () => <Accordion titleValue={'Menu'}
                                                  collapsed={true}
                                                  onChange={callback}/>
export const UsersUnCollapsedMode = () => <Accordion titleValue={'Users'}
                                                     collapsed={false}
                                                     onChange={callback}/>

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true);
    return <Accordion titleValue={'Users'}
                      collapsed={value}
                      onChange={() => setValue(!value)}/>
}
