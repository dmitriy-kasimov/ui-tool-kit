import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { Panel } from '../index';
import { Button } from 'ui/components/controls/buttons/Button';
import { Input } from 'ui/components/controls/inputs/Input';
import { Text, textColor, textSize } from 'ui/components/shared/text/Text';
import { Checkbox } from 'ui/components/controls/checkboxes/Checkbox';


const meta: Meta<typeof Panel> = {
    title: 'components/Panel',
    component: Panel,
    parameters: {
        layout: 'centered',
    },

    tags: ['autodocs'],
    argTypes: {

    },
};

export default meta;
type Story = StoryObj<typeof Panel>;

export const PanelDefault: Story = {
    args: {
        children: (
          <>
           
          </>
        ),
    },
};
const defaultStr: string = 'Lorem ipsum dolor sit amet';
export const PanelGlobal: Story = {
    args: {
        children: (
          <>
            <Button><Text size={textSize.IMPORTANT}>Active</Text></Button>
            <Button disabled><Text size={textSize.IMPORTANT}>Disabled</Text></Button>
            <br/>
            <Input label={'Ur nickname'} limit={32}/>
            <Input label={'Ur mail (optional)'} limit={32}/>
            <Input label={'Ur pass'} limit={32} masked/>
            <Input label={'confirm pass'} limit={32} masked/>
            <br/>
            <Checkbox> <Text size={textSize.REGULAR}>{defaultStr}</Text> </Checkbox>
            <br/>
            <Text size={textSize.TITLE}>size: TITLE</Text>
            <br/>
            <Text size={textSize.SUBTITLE}>size: SUBTITLE</Text>
            <br/>
            <Text size={textSize.IMPORTANT}>size: IMPORTANT</Text>
            <br/>
            <Text size={textSize.REGULAR}>size: REGULAR</Text>
            <br/>
            <Text size={textSize.REGULARSMALL}>size: REGULARSMALL</Text>
            <br/>
            <Text color={textColor.MAIN}>color: MAIN</Text>
            <br/>
            <Text color={textColor.SECONDARY}>color: SECONDARY</Text>
            <br/>
            <Text color={textColor.WARNING}>color: WARNING</Text>
            <br/>
            <Text color={textColor.ERROR}>color: ERROR</Text>
            <br/>
            <Text color={textColor.SUCCESSFULLY}>color: SUCCESSFULLY</Text>
            <br/>
            <Text color={textColor.INFORMATION}>color: INFORMATION</Text>
          </>
        ),
    },
};