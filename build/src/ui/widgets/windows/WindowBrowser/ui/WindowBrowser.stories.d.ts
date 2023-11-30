import React from 'react';
import type { StoryObj } from '@storybook/react';
declare const meta: {
    title: string;
    component: React.FC<import("../types/WindowBrowserProps").WindowBrowserProps>;
    decorators: ((Story: import("@storybook/types").PartialStoryFn<import("@storybook/react/dist/types-0a347bb9").R, {
        title: string;
        tabs: import("../components/WindowBrowserHeader/components/WindowBrowserTabList/components/WindowBrowserTab/types/WindowBrowserTabProps").WindowBrowserTabProps[];
        children?: React.ReactNode;
    }>) => React.JSX.Element)[];
    parameters: {
        layout: string;
    };
    tags: string[];
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const WindowBrowserReg: Story;
export declare const WindowBrowser2: Story;
