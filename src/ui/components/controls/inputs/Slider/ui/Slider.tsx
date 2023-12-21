import React, { FC } from "react";
import './Slider.scss'
import { Text, textColor, textSize } from "ui/components/shared/text/Text";
import { SliderProps } from "../types/SliderProps";

const Slider: FC<SliderProps> = ({
                                  value, 
                                  onChange, 
                                  min, 
                                  max, 
                                  step,
                                  disabled=false
                                }) => {
  return (
    <span className="Slider">
      <input
          className="Slider__input" 
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