import React from 'react';
import { Flex, FlexProps } from '../Flex/Flex';

type VStackProps = Omit<FlexProps, 'direction'>

// memo не юзаем из-за children  в пропсах - 100% всё равно перерисовка будет
export const VStack = (props: VStackProps) => {
    const { align = 'start' } = props;
    return (
        <Flex
            direction="column"
            align={align}
            {...props}
        />
    );
};
