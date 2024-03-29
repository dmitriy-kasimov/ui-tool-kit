import React from 'react';
import { Flex, FlexProps } from '../Flex/Flex';

type HStackProps = Omit<FlexProps, 'direction'>

// memo не юзаем из-за children  в пропсах - 100% всё равно перерисовка будет
export const HStack = (props: HStackProps) => {
    return (
        <Flex direction="row" {...props} />
    );
};
