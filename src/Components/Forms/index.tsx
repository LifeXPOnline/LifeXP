import {useState, useRef, useEffect} from "react";
import {GameIcon} from "../Icons";
import {BsArrowLeft} from "react-icons/bs";
import {IUseInputField} from "../../Hooks";

interface IModal {
    isOpen: boolean;
    hasCloseBtn?: boolean;
    children: React.ReactNode;
}

export const Modal = ({isOpen, hasCloseBtn, children}: IModal) => {
    const [isModalShowing, setModalShow] = useState<boolean>(false);
    const modalRef = useRef<HTMLDialogElement | null>(null);
    useEffect(() => {
        setModalShow(isOpen);
    }, [isOpen]);

    useEffect(() => {
        const modalElement = modalRef.current;
        if (modalElement) {
            if (isModalShowing) {
                modalElement.showModal();
            } else {
                modalElement.close();
            }
        }
    }, [isModalShowing]);

    const handleClose = () => {
        setModalShow(false);
    }

    const handleEscapeKeyPressed = (event: React.KeyboardEvent<HTMLDialogElement>) => {
        if (event.key === "Escape") {
            handleClose();
        }
    }

    return (
        <dialog ref={modalRef} onKeyDown={handleEscapeKeyPressed} className="h-screen w-full backdrop:bg-white">
            <header className="flex flex-row relative mb-5">
                {hasCloseBtn && (
                    <button className="p-3 col-span-1 bg-transparent rounded-full border-black border-2" onClick={handleClose}>
                        <BsArrowLeft width={30} height={30} />
                    </button>
                )
                }
                <div className='absolute left-[45%] flex flex-row cursor-pointer items-center ml-6 mt-1'>
                    <GameIcon height={"30"} width={"30"} />
                    <h1 className='text-xl ml-2' >
                        Life XP
                    </h1>
                </div>
            </header>
            {children}
        </dialog>
    )
}

interface IFormContainer {
    sumbitHandler: (event: React.SyntheticEvent) => void;
}

export const FormContainer = ({sumbitHandler, children}: React.PropsWithChildren<IFormContainer>) => {
    return (
        <form onSubmit={sumbitHandler} className="flex flex-col space-y-6 items-center justify-center rounded-xl border-black w-[320px] h-[480px] border-1 shadow-sharp-md">
            {children}
        </form>
    );
}

interface IInputTextField {
    label: string;
    id: string;
    inputHook: IUseInputField;
}

export const FormTextFields = ({label, id, inputHook}: IInputTextField) => {
    return (
        <div className="flex flex-col">
            <label htmlFor={id}>{label}</label>
            <input className="border-black border-2" id={id} {...inputHook} />
        </div>
    );
}

interface IFormButton {
    label: string;
    type: "button" | "reset" | "submit";
    handler?: (event: React.SyntheticEvent) => void;
    css: string;
}

export const FormButton = ({label, type, handler, css}: IFormButton) => {
    return (
        <button onClick={handler} type={type} className={css}>
            {label}
        </button>
    )
}
