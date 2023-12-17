import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { decoratorBackground } from '../../../../../../../.storybook/decorators/decoratorBackground/decoratorBackground'

import { Panel } from '../index';
import { Button } from 'ui/components/controls/buttons/Button';
import { Input } from 'ui/components/controls/inputs/Input';
import { Text, textColor, textSize } from 'ui/components/shared/text/Text';
import { Checkbox } from 'ui/components/controls/checkboxes/Checkbox';


const meta: Meta<typeof Panel> = {
    title: 'components/Panel',
    component: Panel,
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
type Story = StoryObj<typeof Panel>;

export const PanelWithContent: Story = {
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