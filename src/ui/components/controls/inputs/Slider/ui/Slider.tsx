import React, { FC, memo } from "react";
import './Slider.scss'
import { Text, textColor, textSize } from "ui/components/shared/Text";
import { SliderProps } from "../types/SliderProps";
import { getValidationClasses, validationStatus } from "ui/components/controls";
import { classNames } from "lib/classNames/classNames";

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
    <span className="Slider">
      <input
          className={classNames('Slider__input', {}, [className, getValidationClasses(valid)])}
          value={value}
          onChange={onChange}
          min={min} 
          max={max} 
          type="range" 
          step={step}
          disabled={disabled}
      />
      <span className="Slider__info">
        <Text size={textSize.REGULARSMALL} color={textColor.SECONDARY}>{min}</Text>
        <Text >{value}</Text>
        <Text size={textSize.REGULARSMALL} color={textColor.SECONDARY}>{max}</Text>
      </span>
    </span>
   
  )
});

export default Slider;