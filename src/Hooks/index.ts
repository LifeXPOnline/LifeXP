import {useState, useEffect, RefObject} from 'react';

export const useIsLargeScreen = (): boolean => {
    const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 1024); // breakpoint for window > 1024px

    useEffect(() => {
        const checkScreenSize = () => {
            setIsLargeScreen(window.innerWidth > 1024);
        };

        window.addEventListener('resize', checkScreenSize);

        // when done, remove eventlistener
        return () => {
            window.removeEventListener('resize', checkScreenSize);
        };
    }, []);

    return isLargeScreen;
};

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

export const useOutsideClick = <T extends HTMLElement>({
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

export interface IUseInputField {
    value: string;
    type: string;
    onChange: (event: React.SyntheticEvent) => void;
}

export const useInputField = (type: string): IUseInputField => {
    const [value, setValue] = useState<string>("");

    const onChange = (event: React.SyntheticEvent) => {
        event.preventDefault();
        setValue(event.target.value);
    }

    return {
        value,
        type,
        onChange
    }
}
