import React, { ButtonHTMLAttributes, LegacyRef, forwardRef } from 'react';
import cls from './DisclosureButton.module.scss'

export const DisclosureButton = forwardRef(function (props: ButtonHTMLAttributes<HTMLDivElement>, ref: LegacyRef<HTMLDivElement> | undefined) {
    return (<div className={cls.DisclosureButton} ref={ref} {...props} />)
})