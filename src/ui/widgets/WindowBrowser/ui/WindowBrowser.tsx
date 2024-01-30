import React, {FC, useCallback, useEffect, useRef, useState} from "react";
import './WindowBrowser.scss'
import { WindowBrowserProps } from "../types/WindowBrowserProps";
import { WindowBrowserHeader } from "../components/WindowBrowserHeader/WindowBrowserHeader";
import { WindowBrowserContent } from "../components/WindowBrowserContent/WindowBrowserContent";
import { classNames } from "lib/classNames/classNames";
import { Portal } from "ui/utils/Portal/Portal";
import { ANIMATION_DELAY } from "styles/effects/anims";

export const WindowBrowser: FC<WindowBrowserProps> = (props) => {
  const {
    title, 
    links, 
    children, 
    fullscreen=false, 
    className='',

    isOpen=false,
    onClose,
    lazy,
    isClosable=true,
  } = props;



  const [isClosing, setIsClosing] = useState<boolean>(false);
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
      if (isOpen) {
          setIsMounted(true);
      }
  }, [isOpen]);

  const closeHandler = useCallback(() => {
    if(isClosable){
      if (onClose) {
        setIsClosing(true);
        timerRef.current = setTimeout(() => {
            onClose();
            setIsClosing(false);
        }, ANIMATION_DELAY);
      }
    }   
  }, [onClose]);

  // Новые ссылки!!!
  // Для сохранения сслыки useCallback
  const onKeyDown = useCallback((e: KeyboardEvent) => {
      if (e.key === 'Escape') {
          closeHandler();
      }
  }, [closeHandler]);
  const onContentClick = (e: React.MouseEvent) => {
      e.stopPropagation();
  };

  useEffect(() => {
    if(isClosable){
      if (isOpen) {
          window.addEventListener('keydown', onKeyDown);
      }
      return () => {
          clearTimeout(timerRef.current);
          window.removeEventListener('keydown', onKeyDown);
      };
    }    
  }, [isOpen, onKeyDown]);

  const mods: Record<string, boolean> = {
      WindowBrowser__opened: isOpen,
      WindowBrowser__isClosing: isClosing,
  };

  if (lazy && !isMounted) {
      return null;
  }

  return (
    <Portal>
      <div className={classNames('WindowBrowser', mods, [])}>
        <div 
          className={classNames('WindowBrowser__overlay', {}, [])}
          onClick={closeHandler}
        >
            <div 
              className={classNames('WindowBrowser__overlay__content', {WindowBrowser__fullscreen: fullscreen}, [className])}
              onClick={onContentClick}
            >
              <WindowBrowserHeader 
                title={title} 
                tabs={links}
              />

              <WindowBrowserContent>
                {children}
              </WindowBrowserContent>
            </div>
        </div>
      </div>
    </Portal>
  );
};