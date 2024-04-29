import type { Meta, StoryObj } from '@storybook/react';

import { Text } from '../index';

import { decoratorBackground } from '../../../../../../.storybook/decorators/decoratorBackground/decoratorBackground'
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'components/shared/Text',
  component: Text,
  decorators: [
    (Story) => (
      decoratorBackground(Story)
    )
  ],
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} satisfies Meta<typeof Text >;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultStr: string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua';

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const TextFontTitle: Story = {
    args: {
       font: 'title',
       children: (defaultStr)
    },  
};

export const TextFontMain: Story = {
    args: {
       font: 'main',
       children: (defaultStr)
    },  
};

export const TextSizeTitle: Story = {
    args: {
       size: 'title',
       children: (defaultStr)
    },  
};


export const TextSizeSubtitle: Story = {
    args: {
       size: 'subtitle',
       children: (defaultStr)
    },  
};

export const TextSizeImportant: Story = {
    args: {
       size: 'important',
       children: (defaultStr)
    },  
};

export const TextSizeRegular: Story = {
    args: {
       size: 'regular',
       children: (defaultStr)
    },  
};

export const TextSizeRegularsmall: Story = {
    args: {
       size: 'regularsmall',
       children: (defaultStr)
    },  
};

export const TextColorMain: Story = {
    args: {
       color: 'main',
       children: (defaultStr)
    },  
};

export const TextColorSecondary: Story = {
    args: {
       color: 'secondary',
       children: (defaultStr)
    },  
};

export const TextColorWarning: Story = {
    args: {
       color: 'warning',
       children: (defaultStr)
    },  
};

export const TextColorError: Story = {
    args: {
       color: 'error',
       children: (defaultStr)
    },  
};

export const TextColorSuccess: Story = {
    args: {
       color: 'success',
       children: (defaultStr)
    },  
};

export const TextColorInfo: Story = {
    args: {
       color: 'info',
       children: (defaultStr)
    },  
};

