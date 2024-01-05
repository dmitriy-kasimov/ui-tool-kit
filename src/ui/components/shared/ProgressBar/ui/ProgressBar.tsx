import React, {FC} from "react";
import { ProgressBarProps, ProgressBarType } from "../types/ProgressBarProps";
import './ProgressBar.scss';
import { Text, textColor, textSize } from "ui/components/shared/Text";

const ProgressBar: FC<ProgressBarProps> = ({max, value, type=ProgressBarType.HORIZONTAL}) => {
  
  const classBg = ['ProgressBar__bg'];
  const classBar = ['ProgressBar__bar'];
  if(type == ProgressBarType.VERTICAL){
    classBg.push('ProgressBar__bg-vertical');
    classBar.push('ProgressBar__bar-vertical');
  }
  else  { 
    classBg.push('ProgressBar__bg-horizontal');
    classBar.push('ProgressBar__bar-horizontal');
  }
  return (
    <div className="ProgressBar">
      <progress max={max} value={value}></progress>
      <div className={classBg.join(' ')}>
          <div className={classBar.join(' ')}>
            
          </div>
      </div>
      <div className="progress-value">
        <Text size={textSize.REGULARSMALL}>{value}%</Text>
      </div>
    </div>
  )
};

export default ProgressBar;