import React, { useEffect, useRef } from "react";

import { MouseEventHandler } from "react";
import { Option } from "../../../types/SelectProps";

import './OptionSelect.scss';
import { Text } from "ui/components/shared/text/Text";


type OptionProps = {
    option: Option;
    onClick: (value: Option['value']) => void;
  };
const OptionSelect = (props: OptionProps) => {
    const {
      option: { value, title },
      onClick,
    } = props;
  
    const optionRef = useRef<HTMLLIElement>(null);

    useEffect(() => {
      const option = optionRef.current;
      if (!option) return;
  
      const handleEnterPress = (event: KeyboardEvent) => { 
        if ((document.activeElement === option) && event.key === 'Enter') {
          onClick(value);
        }
      }
  
      option.addEventListener('keydown', handleEnterPress);
  
      return () => {
        option.removeEventListener('keydown', handleEnterPress);
      };
    }, [value, onClick]);

    const handleClick =
      (clickedValue: Option['value']): MouseEventHandler<HTMLLIElement> =>
      () => {
        onClick(clickedValue);
      };
  
    return (
      <li
        className={'OptionSelect__option'}
        ref={optionRef}
        value={value}
        onClick={handleClick(value)}
        tabIndex={0}
      >
        <Text>{title}</Text>
      </li>
    );
};

export default OptionSelect;