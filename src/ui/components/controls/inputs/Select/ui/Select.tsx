import React, {FC, MouseEventHandler, useEffect, useRef, useState} from 'react';
import { Option, SelectProps } from '../types/SelectProps';

import './Select.scss'

import ArrowDown from 'styles/assets/icons/arrowDown.svg'
import OptionSelect from '../components/Option/ui/OptionSelect';
import { Text } from 'ui/components/shared/text/Text';
import { getValidationClasses, validationStatus } from 'ui/components/controls';

const Select = (props: SelectProps) => {
  
    const {
        mode = 'rows',
        options,
        placeholder,
        status = 'default',
        selected,
        onChange,
        onClose,
        valid = validationStatus.DEFAULT,
        disabled = false
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

    const rootClasses: string[] = ['Select__wrapper'];
    rootClasses.push(getValidationClasses(valid));
    if(disabled)
      rootClasses.push('disabled');
    
    return (
        <div
          className={rootClasses.join(' ')}
          ref={rootRef}
          data-is-active={isOpen}
          data-mode={mode}
        >
          <div className={'Select__wrapper__arrow'}>
            <ArrowDown />
          </div>
          <div
            className={'Select__wrapper__placeholder'}
            ref={placeholderRef}
            data-status={status}
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