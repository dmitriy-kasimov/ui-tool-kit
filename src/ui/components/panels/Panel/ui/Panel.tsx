import React, {FC} from "react";
import { PanelProps } from "../types/PanelProps";
import './Panel.scss'

export const Panel: FC<PanelProps> = ({
                                        className = '', 
                                        children
                                    }) => {
    
    const rootClasses: string[] = ['Panel'];
    rootClasses.push(className);
    return(
        <div className={rootClasses.join(' ')}>
            {children}
        </div>
    )
}