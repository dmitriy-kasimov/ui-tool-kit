import React, {FC, memo} from "react";
import './Link.scss'
import { LinkProps } from "../types/LinkProps";
import { Text } from "ui/components/shared/Text/ui/Text";
import { textColor, textFont, textSize } from "ui/components/shared/Text/types/TextProps";
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
      className={classNames('Link', {}, [className])}
      disabled={disabled}
      {...otherProps}
    >
      {children}
    </button>
  );
});