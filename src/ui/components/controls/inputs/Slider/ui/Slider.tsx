import React, { FC, memo } from "react";
import cls from './Slider.module.scss'
import { Text, textColor, textSize } from "ui/components/shared/Text";
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
    <VStack className={classNames('', {}, [className])}>
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
      <HStack max justify="between">
        <Text size={textSize.REGULARSMALL} color={textColor.SECONDARY}>{min}</Text>
        <Text>{value}</Text>
        <Text size={textSize.REGULARSMALL} color={textColor.SECONDARY}>{max}</Text>
      </HStack>
    </VStack>
   
  )
});

export default Slider;