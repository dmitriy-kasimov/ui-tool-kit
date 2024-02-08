import React, {FC, memo} from "react";
import { LoaderProps, LoaderSize } from "../types/LoaderProps";
import './Loader.scss'
import { classNames } from "lib/classNames/classNames";

const Loader: FC<LoaderProps> = memo(({
                                    size=LoaderSize.MIDDLE,
                                    children=null,
                                    className=''
                                }) => {
  
    const loaderBoxClasses = [];
    const loaderBoxLoaderClasses = [];
    switch(size){
        case LoaderSize.SMALL:
            loaderBoxClasses.push('Loader__box-small');
            loaderBoxLoaderClasses.push('Loader__box__loader-small');
            break;
        case LoaderSize.MIDDLE:
            loaderBoxClasses.push('Loader__box-middle');
            loaderBoxLoaderClasses.push('Loader__box__loader-middle');
            break;
        case LoaderSize.BIG:
            loaderBoxClasses.push('Loader__box-big');
            loaderBoxLoaderClasses.push('Loader__box__loader-big');
            break;
        default:
            loaderBoxClasses.push('Loader__box-middle');
            loaderBoxLoaderClasses.push('Loader__box__loader-middle');
    }

    return (
    <div className={classNames('Loader', {}, [className])}>
        <div className={classNames('Loader__box', {}, loaderBoxClasses)}>
            <span className={classNames('Loader__box__loader', {}, loaderBoxLoaderClasses)} />
        </div>   
        {children}
    </div>
    
  )
});

export default Loader;