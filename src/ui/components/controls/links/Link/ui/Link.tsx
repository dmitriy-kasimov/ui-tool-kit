import React, {FC} from "react";
import './Link.scss'
import { LinkProps } from "../types/LinkProps";
import { Text } from "ui/components/shared/Text/ui/Text";
import { textColor, textFont, textSize } from "ui/components/shared/Text/types/TextProps";
import { classNames } from "lib/classNames/classNames";

export const Link: FC<LinkProps> = ({
                                      name, 
                                      active=false, 
                                      onClick,
                                      className=''
                                    }) => {


  const mods: Record<string, boolean> = {
    LinkActive: active,
    LinkPassive: !active
  }
  return (
    <button 
      onClick={onClick}  
      className={classNames('Link', mods, [className])}
      disabled={mods.LinkActive}
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

