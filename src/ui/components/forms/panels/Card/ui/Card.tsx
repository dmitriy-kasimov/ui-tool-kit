import React, {FC, useState} from "react";
import { CardProps } from "../types/CardProps";
import './Card.scss'
import { Switcher } from "ui/components/controls/inputs/Switcher";
// import { Checkbox } from "ui/components/controls/inputs/Checkbox";
// import { Slider } from "ui/components/controls/inputs/Slider";
//import Select from "ui/components/controls/inputs/Select/ui/Select";

export const Card: FC<CardProps> = ({
                                        className = '', 
                                        children
                                    }) => {
    
    const rootClasses: string[] = ['Card'];
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

    // const [value, setValue] = useState(0);
    // const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    //     setValue(Number(e.target.value))
    // }
    const [value, setValue] = useState(false);
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
                {/* <Slider
                  value={value}
                  onChange={changeHandler}
                  label='Neck'
                  min={0}
                  max={10}
                  step={1}
                /> */}
                <Switcher
                  value={value}
                  onChange={() => setValue(!value)}
                id={'123'}/>
            <div className={rootClasses.join(' ')}>
                {children}
            </div>
        </>  
    )
}