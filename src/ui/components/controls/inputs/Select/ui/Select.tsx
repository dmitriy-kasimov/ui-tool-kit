/*
  * Источник: https://habr.com/ru/articles/735224/



  Пример использования:

  export default FunctionalComponent = () => {
    const options = [
      { "title": "янв", "value": "01" },
      { "title": "фев", "value": "02" },
      { "title": "мар", "value": "03" },
      { "title": "апр", "value": "04" },
      { "title": "май", "value": "05" },
      { "title": "июн", "value": "06" },
      { "title": "июл", "value": "07" },
      { "title": "авг", "value": "08" },
      { "title": "сен", "value": "09" },
      { "title": "окт", "value": "10" },
      { "title": "ноя", "value": "11" },
      { "title": "дек", "value": "12" }
    ];

    const [month, setMonth] = useState('');
    const handleChangeDate = (value: string) =>{
      setMonth(value);
    }
    const selectedMonth = options.find(item => item.value === month);

    return (
       <Select
          placeholder='Выберите месяц'
          options={options}
          selected={selectedMonth || null}
          onChange={handleChangeDate}
        />
    )
  }
*/

import React, {FC, MouseEventHandler, useEffect, useRef, useState} from 'react';
import { Option, SelectProps } from '../types/SelectProps';

import './Select.scss'

import ArrowDown from 'styles/assets/icons/arrowDown.svg'
import OptionSelect from '../components/Option/ui/OptionSelect';
import { Text } from 'ui/components/shared/Text';
import { getValidationClasses, validationStatus } from 'ui/components/controls';
import { classNames } from 'lib/classNames/classNames';

const Select = (props: SelectProps) => {
  
    const {
        options,
        placeholder,
        selected,
        onChange,
        onClose,
        valid = validationStatus.DEFAULT,
        disabled = false,
        className = ''
    } = props;

    const placeholderRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const placeholderEl = placeholderRef.current;
        if (!placeholderEl) return;
    
        const handleClick = (event: KeyboardEvent) => {
          if (event.key === 'Enter') {
            setIsOpen((prev) => !prev);
          }
        };
    
        placeholderEl.addEventListener('keydown', handleClick);
    
        return () => {
          placeholderEl.removeEventListener('keydown', handleClick);
        };
      }, []);

    const [isOpen, setIsOpen] = useState(false);
    const rootRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClick = (event: MouseEvent) => {
        const { target } = event;
        if (target instanceof Node && !rootRef.current?.contains(target)) {
            isOpen && onClose?.();
            setIsOpen(false);
        }
        };

        window.addEventListener('click', handleClick);

        return () => {
        window.removeEventListener('click', handleClick);
        };
    }, [isOpen, onClose]);

    const handleOptionClick = (value: Option['value']) => {
        setIsOpen(false);
        onChange?.(value);
    };
        const handlePlaceHolderClick: MouseEventHandler<HTMLDivElement> = () => {
        setIsOpen((prev) => !prev);
    };

    const mods: Record<string, boolean> = {
      disabled
    }
    return (
        <div
          className={classNames('Select__wrapper', mods, [className, getValidationClasses(valid)])}
          ref={rootRef}
          data-is-active={isOpen}
        >
          <div className={'Select__wrapper__arrow'}>
            <ArrowDown />
          </div>
          <div
            className={'Select__wrapper__placeholder'}
            ref={placeholderRef}
            data-selected={!!selected?.value}
            onClick={handlePlaceHolderClick}
            role='button'
            tabIndex={0}
          >
            {
              selected?.title 
                ?
              <Text>{selected?.title}</Text> 
                :
              <Text>{placeholder}</Text>
            }
          </div>
          {isOpen && (
            <ul className={'Select__wrapper__select'}>
              {options.map((option) => (
                <OptionSelect
                  key={option.value}
                  option={option}
                  onClick={handleOptionClick}
                />
              ))}
            </ul>
          )}
        </div>
      );

};

export default Select;