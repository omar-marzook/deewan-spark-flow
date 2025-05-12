'use client';

import { useEffect, RefObject } from 'react';

type Handler = (event: MouseEvent | TouchEvent) => void;

export function useClickOutside<T extends HTMLElement = HTMLElement>(
  refs: RefObject<T>[] | RefObject<T>,
  handler: Handler,
  mouseEvent: 'mousedown' | 'mouseup' | 'click' = 'mousedown'
): void {
  useEffect(() => {
    const refsArray = Array.isArray(refs) ? refs : [refs];
    
    const listener = (event: MouseEvent | TouchEvent) => {
      const target = event.target as Node;
      const shouldTrigger = refsArray.every(
        (ref) => !ref.current || !ref.current.contains(target)
      );
      
      if (shouldTrigger) {
        handler(event);
      }
    };

    document.addEventListener(mouseEvent, listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener(mouseEvent, listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [refs, handler, mouseEvent]);
}