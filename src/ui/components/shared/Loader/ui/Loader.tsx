import React, {FC} from "react";
import { LoaderProps, LoaderSize } from "../types/LoaderProps";
import './Loader.scss'

const Loader: FC<LoaderProps> = ({
                                    size=LoaderSize.MIDDLE,
                                    children=null
                                }) => {
  
    const loaderBoxClasses = ['Loader__box'];
    const loaderBoxLoaderClasses = ['Loader__box__loader'];
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

    }

    return (
    <div className="Loader">
        <div className={loaderBoxClasses.join(' ')}>
            <span className={loaderBoxLoaderClasses.join(' ')} />
        </div>   
        {children}
    </div>
    
  )
};

export default Loader;