import React, {FC, memo} from "react";
import { ProgressBarProps } from "../types/ProgressBarProps";
import cls from './ProgressBar.module.scss';
import { Text } from "ui/components/shared/Text";
import { classNames } from "lib/classNames/classNames";

const ProgressBar: FC<ProgressBarProps> = memo((props) => {
  
  const {
    max, 
    value, 
    type='horizontal', 
    className='',
    length = '150px',
    thickness = '20px'
  } = props;

  const classBg = [];
  const classBar = [cls.bar];
  if(type == "vertical"){
    classBg.push(cls.bgVertical);
    classBar.push(cls.barVertical);
  }
  else  { 
    classBg.push(cls.bgHorizontal);
    classBar.push(cls.barHorizontal);
  }
  return (
    <div className={classNames(cls.ProgressBar, {}, [className])}>
      <progress max={max} value={value}></progress>
      <div 
        className={classNames(cls.bg, {}, classBg)} 
        style={{
          width: type == "horizontal" ? length : thickness, 
          height: type == "vertical" ? length : thickness
        }}
      >
          <div className={classNames(cls.bar, {}, classBar)}>
            <span className={cls.progressValue}>
              <Text size="s">{value}%</Text>
            </span>
          </div>
      </div>
    </div>
  )
});

export default ProgressBar;