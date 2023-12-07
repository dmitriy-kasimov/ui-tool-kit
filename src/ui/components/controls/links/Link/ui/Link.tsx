import React, {FC} from "react";
import './Link.scss'
import { LinkProps } from "../types/LinkProps";
import { Text } from "ui/components/shared/text/Text/ui/Text";
import { textColor, textFont, textSize } from "ui/components/shared/text/Text/types/TextProps";

export const Link: FC<LinkProps> = ({
                                      name, 
                                      active=false, 
                                      onClick
                                    }) => {
  const rootClasses: string[] = ['Link'];
  if(active)
    rootClasses.push('LinkActive');
  return (
    <span 
      onClick={onClick}  
      className={rootClasses.join(' ')}
    >
      <Text
        className="LinkText"
        size={textSize.IMPORTANT}
      >
        {name}
      </Text>
    </span>
  );
};

