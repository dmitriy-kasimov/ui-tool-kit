import React, { FC, memo } from "react";
import cls from './Slider.module.scss'
import { Text } from "ui/components/shared/Text";
import { SliderProps } from "../types/SliderProps";
import { getValidationClasses, validationStatus } from "ui/components/controls";
import { classNames } from "lib/classNames/classNames";
import { HStack, VStack } from "ui/components/shared/Stack";

const Slider: FC<SliderProps> = memo(({
                                  value, 
                                  onChange, 
                                  min, 
                                  max, 
                                  step,
                                  disabled=false,
                                  valid=validationStatus.DEFAULT,
                                  className=''
                                }) => {
    
  return (
    <HStack gap="4" className={classNames('', {}, [className])}>
      <input
          className={classNames(cls.input, {}, [getValidationClasses(valid)])}
          value={value}
          onChange={e => onChange(Number(e.target.value))}
          min={min} 
          max={max} 
          type="range" 
          step={step}
          disabled={disabled}
      />
      <Text>{value}</Text>
    </HStack>
   
  )
});

export default Slider;