import React, {FC} from "react";
import './Link.scss'
import { LinkProps } from "../types/LinkProps";
import { Text } from "ui/components/text/Text/ui/Text";
import { textColor, textFont, textSize } from "ui/components/text/Text/types/TextProps";

export const Link: FC<LinkProps> = ({name, onClick}) => {
  return (
    <span 
      onClick={onClick}  
      className="Link"
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

