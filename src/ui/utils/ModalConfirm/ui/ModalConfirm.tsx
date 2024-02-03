import React, { FC } from "react";
import './ModalConfirm.scss'

import { Modal } from "ui/utils/Modal";
import { ModalConfirmProps } from "../types/ModalConfirmProps";
import { classNames } from "lib/classNames/classNames";
import { Text, textColor, textFont, textSize } from "ui/components/shared/Text";
import { Button } from "ui/components/controls/buttons/Button";

export const ModalConfirm: FC<ModalConfirmProps> = ({
                                                isOpen, 
                                                onClose, 
                                                onConfirm,
                                                title = 'Подтверждение действия',
                                                children,
                                                lazy = true
                                            }) => {
  
    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            lazy={lazy}
        >
            <div className={classNames('ModalConfirm', {}, [])}>
                <Text 
                    className="ModalConfirm__title"
                    font={textFont.TITLE} 
                    size={textSize.IMPORTANT}
                >
                    {title}
                </Text>
                <Text
                    className="ModalConfirm__description"
                >
                    {children}
                </Text>
                <div className="ModalConfirm__select">
                    <Button
                        onClick={() => {onConfirm(), onClose()}}
                    >
                        <Text color={textColor.SUCCESSFULLY}>Подтвердить</Text>
                    </Button>
                    <Button
                        onClick={onClose}
                    >
                        <Text color={textColor.ERROR}>Отменить</Text>
                    </Button>
                </div>
            </div>
        </Modal>
    )
};