import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { decoratorBackground } from '../../../../../../.storybook/decorators/decoratorBackground/decoratorBackground'

import { Navbar } from './Navbar';
import { Link } from 'ui/components/controls/links/Link';
import { Text, textSize } from 'ui/components/shared/Text';

const meta: Meta<typeof Navbar> = {
    title: 'widgets/Navbar',
    component: Navbar,
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
type Story = StoryObj<typeof Navbar>;

// export const NavbarDefault: Story = {
//     args: {
    
//     },
// };
