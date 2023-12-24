import React, { FC } from "react";
import './Slider.scss'
import { Text, textColor, textSize } from "ui/components/shared/Text";
import { SliderProps } from "../types/SliderProps";
import { getValidationClasses, validationStatus } from "ui/components/controls";

const Slider: FC<SliderProps> = ({
                                  value, 
                                  onChange, 
                                  min, 
                                  max, 
                                  step,
                                  disabled=false,
                                  valid=validationStatus.DEFAULT
                                }) => {
  
    const inputClasses: string[] = ['Slider__input'];
    inputClasses.push(getValidationClasses(valid));
    
    
    return (
    <span className="Slider">
      <input
          className={inputClasses.join(' ')}
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
};

export default Slider;