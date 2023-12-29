import React, {FC} from "react";
import { ProgressBarProps } from "../types/ProgressBarProps";

import './ProgressBar.scss'
const ProgressBar: FC<ProgressBarProps> = () => {
  return (
    <div className="container">
        <div className="box">
            <div className="shadow"></div>
            <div className="content">
            <div className="percent" data-text="HTML">
                <div className="dot"></div>
                <svg>
                <circle cx="70" cy="70" r="70"></circle>
                <circle cx="70" cy="70" r="70"></circle>
                </svg>
            </div>
            <div className="number">
                <h2>85<span>%</span></h2>
            </div>
            </div>
        </div>
    </div>
  )
};

export default ProgressBar;