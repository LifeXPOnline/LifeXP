import { RefObject } from "react";
/**
 * Custom hook to detect a click outside a referenced element.
 *
 * @param ref - The ref of the element to monitor for outside clicks.
 * @param callback - The callback to execute when an outside click is detected.
 */
interface UseOutsideClickProps<T extends HTMLElement> {
    ref: RefObject<T>;
    callback: () => void;
}
declare const useOutsideClick: <T extends HTMLElement>({ ref, callback, }: UseOutsideClickProps<T>) => void;
export default useOutsideClick;
