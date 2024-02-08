import React, {FC, memo} from "react";
import { ProgressBarProps, ProgressBarType } from "../types/ProgressBarProps";
import './ProgressBar.scss';
import { Text, textColor, textSize } from "ui/components/shared/Text";
import { classNames } from "lib/classNames/classNames";

const ProgressBar: FC<ProgressBarProps> = memo(({max, 
                                            value, 
                                            type=ProgressBarType.HORIZONTAL, 
                                            className=''
                                          }) => {
  
  const classBg = [];
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
    <div className={classNames('ProgressBar', {}, [className])}>
      <progress max={max} value={value}></progress>
      <div className={classNames('ProgressBar__bg', {}, classBg)}>
          <div className={classNames('ProgressBar__bar', {}, classBar)}>
          </div>
      </div>
      <div className="progress-value">
        <Text size={textSize.REGULARSMALL}>{value}%</Text>
      </div>
    </div>
  )
});

export default ProgressBar;