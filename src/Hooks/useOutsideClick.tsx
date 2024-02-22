import { useEffect, RefObject } from "react";
/**
 * Custom hook to detect a click outside a referenced element.
 * 
 * @param ref - The ref of the element to monitor for outside clicks.
 * @param callback - The callback to execute when an outside click is detected.
 */

//interface for the hook's parameters
interface UseOutsideClickProps<T extends HTMLElement> {
    ref: RefObject<T>;
    callback: () => void;
}

const useOutsideClick = <T extends HTMLElement>({
    ref,
    callback,
}: UseOutsideClickProps<T>): void => {
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent): void => {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                callback();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [ref, callback]);
};

export default useOutsideClick;
