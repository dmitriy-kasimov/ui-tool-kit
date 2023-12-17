import React, {FC} from "react";
import { PanelProps } from "../types/PanelProps";
import './Panel.scss'
import { Checkbox } from "ui/components/controls/checkboxes/Checkbox";
//import Select from "ui/components/controls/selects/Select/ui/Select";

export const Panel: FC<PanelProps> = ({
                                        className = '', 
                                        children
                                    }) => {
    
    const rootClasses: string[] = ['Panel'];
    rootClasses.push(className);
    
    // const [month, setMonthValue] = useState('');
    // const handleMonthSelect = (value: string) => {
    //   setMonthValue(value);
    // };
  
    // const options = [
    //     { "title": "янв", "value": "01" },
    //     { "title": "фев", "value": "02" },
    //     { "title": "мар", "value": "03" },
    //     { "title": "апр", "value": "04" },
    //     { "title": "май", "value": "05" },
    //     { "title": "июн", "value": "06" },
    //     { "title": "июл", "value": "07" },
    //     { "title": "авг", "value": "08" },
    //     { "title": "сен", "value": "09" },
    //     { "title": "окт", "value": "10" },
    //     { "title": "ноя", "value": "11" },
    //     { "title": "дек", "value": "12" }
    // ];
    // const selectedMonth = options.find((item) => item.value === month);                                   

    
    return(
        <>
            {/* <div style={{width: 250, margin: 'auto'}}>
                <Select
                    mode='rows'
                    options={options}
                    selected={selectedMonth || null}
                    onChange={handleMonthSelect}
                    placeholder='Выберите месяц'
                />
            </div> */}

            <div className={rootClasses.join(' ')}>
                {children}
            </div>
        </>  
    )
}