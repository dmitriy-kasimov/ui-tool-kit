import React, {FC, memo} from "react";
import cls from './Link.module.scss'
import { LinkProps } from "../types/LinkProps";
import { classNames } from "lib/classNames/classNames";

export const Link: FC<LinkProps> = memo(({
                                      children,
                                      onClick,
                                      disabled=false,
                                      className='',
                                      ...otherProps
                                    }) => {

  return (
    <button 
      onClick={onClick}  
      className={classNames(cls.Link, {[cls.disabled]: disabled}, [className])}
      disabled={disabled}
      {...otherProps}
    >
      {children}
    </button>
  );
});