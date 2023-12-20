import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { decoratorBackground } from '../../../../../../../.storybook/decorators/decoratorBackground/decoratorBackground'

import { Card } from '../index';
import { Button } from 'ui/components/controls/buttons/Button';
import { TextField } from 'ui/components/controls/inputs/TextField';
import { Text, textColor, textSize } from 'ui/components/shared/text/Text';
import { Checkbox } from 'ui/components/controls/inputs/Checkbox';


const meta: Meta<typeof Card> = {
    title: 'components/Card',
    component: Card,
    decorators: [
      (Story) => (
        decoratorBackground(Story)
      )
    ],
    parameters: {
        layout: 'centered',
    },

    tags: ['autodocs'],
    argTypes: {

    },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const CardWithContent: Story = {
    args: {
        children: (
          <div style={{display: 'flex', flexDirection: 'column'}}>
            <Button><Text size={textSize.IMPORTANT}>Active</Text></Button>
            <Button disabled><Text size={textSize.IMPORTANT}>Disabled</Text></Button>
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
          </div>
        ),
    },
};