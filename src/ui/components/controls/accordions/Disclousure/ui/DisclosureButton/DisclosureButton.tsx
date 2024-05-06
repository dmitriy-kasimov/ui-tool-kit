import React, { ButtonHTMLAttributes, LegacyRef, forwardRef } from 'react';

export const DisclosureButton = forwardRef(function (props: ButtonHTMLAttributes<HTMLDivElement>, ref: LegacyRef<HTMLDivElement> | undefined) {
    return (<div ref={ref} {...props} />)
})