/// <reference types="react" />
import type { StoryObj } from '@storybook/react';
import { textFont, textSize, textColor } from '../index';
declare const meta: {
    title: string;
    component: import("react").FC<import("../types/TextProps").TextProps>;
    decorators: ((Story: import("@storybook/types").PartialStoryFn<import("@storybook/react/dist/types-0a347bb9").R, {
        font?: textFont | undefined;
        size?: textSize | undefined;
        color?: textColor | undefined;
        className?: string | undefined;
        children: import("react").ReactNode;
    }>) => import("react").JSX.Element)[];
    parameters: {
        layout: string;
    };
    tags: string[];
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const TextFontMain: Story;
export declare const TextSizeTitle: Story;
export declare const TextSizeSubtitle: Story;
export declare const TextSizeImportant: Story;
export declare const TextSizeRegular: Story;
export declare const TextSizeRegularsmall: Story;
export declare const TextColorMain: Story;
export declare const TextColorSecondary: Story;
export declare const TextColorWarning: Story;
export declare const TextColorError: Story;
export declare const TextColorSuccessfully: Story;
export declare const TextColorInformation: Story;
