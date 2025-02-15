import React, {useEffect} from "react";
import {FC, useState} from "react";
import {Window} from '../utils/Window'
import {Skeleton} from "ui/components/shared/Skeleton";
import {VStack} from "ui/components/shared/Stack";
import {Modal} from "ui/utils/Modal";
import {Text} from '../components/shared/Text'

export const Test: FC = () => {
    const [window, setWindow] = useState(true);
    const [modal, setModal] = useState(false);
    useEffect(()=> {
        setTimeout(() => setModal(true), 3000)
    })
    return (
        <>
            <Modal
                isOpen={modal}
                onClose={()=>setModal(false)}
            >
                <Text>Модалка</Text>
                <VStack gap='s'>
                    <Text>Модалка</Text>
                    <Text>Модалка</Text>
                    <Text>Модалка</Text>
                    <Text>Модалка</Text>
                    <Text>Модалка</Text>
                    <Text>Модалка</Text>
                    <Text>Модалка</Text>
                    <Text>Модалка</Text>
                </VStack>
            </Modal>
            <Window
                isOpen={window}
                onClose={()=>setWindow(false)}
                lazy
                content={
                    <VStack gap='s'>
                        <Skeleton width={500} height={40} border={'8px'}/>
                        <Skeleton width={500} height={40} border={'8px'}/>
                        <Skeleton width={500} height={40} border={'8px'}/>
                        <Skeleton width={500} height={40} border={'8px'}/>
                        <Skeleton width={500} height={40} border={'8px'}/>
                        <Skeleton width={500} height={40} border={'8px'}/>
                        <Skeleton width={500} height={40} border={'8px'}/>
                        <Skeleton width={500} height={40} border={'8px'}/>
                        <Skeleton width={500} height={40} border={'8px'}/>
                        <Skeleton width={500} height={40} border={'8px'}/>
                        <Skeleton width={500} height={40} border={'8px'}/>
                    </VStack>
                }
            />

        </>

    )
}