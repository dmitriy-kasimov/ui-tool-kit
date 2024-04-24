import React from 'react';
import './index.css'
import { Story } from "@storybook/react";

export const decoratorBackground = (StoryComponent: Story) => (
    <div className='image'>
        <div className='bg'>
            <StoryComponent />
        </div>
    </div>
);
    
        