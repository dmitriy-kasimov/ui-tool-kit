import React, {FC} from "react";
import { AlertProps } from "../types/AlertProps";
import { classNames } from "lib/classNames/classNames";

import './Alert.scss';

const Alert: FC<AlertProps> = ({children}) => {
  return (
    <div className={classNames('Alert', {}, [])}>
        
      {children}
    </div>
  )
};

export default Alert;