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

  if(active){
    rootClasses.push('LinkActive');
  }
  else
    rootClasses.push('LinkPassive');
  return (
    <button 
      onClick={onClick}  
      className={rootClasses.join(' ')}
      disabled={rootClasses.includes('LinkActive')}
    >
      <Text
        className="LinkText"
        font={textFont.TITLE}
        size={textSize.REGULAR}
      >
        {name}
      </Text>
    </button>
  );
};

