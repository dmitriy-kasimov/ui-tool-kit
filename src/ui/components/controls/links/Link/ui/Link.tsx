import React, {FC, memo} from "react";
import cls from './Link.module.scss'
import { LinkProps } from "../types/LinkProps";
import { classNames } from "lib/classNames/classNames";

export const Link: FC<LinkProps> = memo(({
                                      children,
                                      disabled=false,
                                      className='',
                                      ...otherProps
                                    }) => {

  return (
    <button 
      className={classNames(cls.Link, {[cls.disabled]: disabled}, [className])}
      disabled={disabled}
      {...otherProps}
    >
      {children}
    </button>
  );
});