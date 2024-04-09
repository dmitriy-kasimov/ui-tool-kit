import React from 'react';
import {
    ImgHTMLAttributes, memo, useLayoutEffect, useState,
} from 'react';

interface AppImageProps extends ImgHTMLAttributes<HTMLImageElement>{
    className?: string;
    fallback?: React.ReactElement;
    errorFallback?: React.ReactElement;
}

export const AppImage = memo((props: AppImageProps) => {
    const {
        className,
        fallback,
        errorFallback,
        alt = 'image',
        src,
        ...otherProps
    } = props;

    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    useLayoutEffect(() => {
        const img = new Image();
        img.src = src ?? '';
        img.onload = () => {
            setIsLoading(false);
        };
        img.onerror = () => {
            setIsLoading(false);
            setHasError(true);
        };
    }, [src]);

    if (isLoading && fallback) {
        return fallback;
    }

    if (hasError && errorFallback) {
        return errorFallback;
    }

    return (
        <img decoding="async" className={className} src={src} alt={alt} {...otherProps} />
    );
});
