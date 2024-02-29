import {IUseInputField, useInputField} from "../../Hooks";
import {FormButton, FormContainer, FormTextFields, Modal} from "./index";
import {GameIcon} from "../Icons";

interface ILoginForm {
    isOpen: boolean;
}

const LoginForm = ({isOpen}: ILoginForm) => {
    const email: IUseInputField = useInputField("email");
    const pw: IUseInputField = useInputField("password");
    const rememberpw: IUseInputField = useInputField("checkbox");

    const handleLogin = (event: React.SyntheticEvent): void => {
        event.preventDefault();
        console.log({email: email.value, password: pw.value, remember: rememberpw.value});
    }

    return (
        <Modal isOpen={isOpen} hasCloseBtn={true}>
            <div className="relative p-6 flex flex-col items-center justify-center">
                <FormContainer sumbitHandler={handleLogin}>
                    <GameIcon width="30" height="30" />
                    <FormTextFields inputHook={email} id="email" label="Email:" />
                    <FormTextFields inputHook={pw} label="Password:" id="pw" />
                    <label className="align-self-start text-xs" htmlFor="rememberpw">
                        <input id="rememberpw" {...rememberpw} /> Remember my password
                    </label>
                    <button type="submit" className="bg-quest-gray2 border-[1.5px] border-black text-white 
                                w-7/12 h-10 rounded-md text-md hover:bg-quest-gray4">
                        Login
                    </button>
                    <footer className="p-5 w-full text-sm text-center underline">
                        <div className="mb-5 flex flex-row justify-evenly">
                            <a href="#">Forgot password?</a>
                            <a href="#">Don't have an account?</a>
                        </div>
                        <a href="#">Login as Guest</a>
                    </footer>
                </FormContainer>
            </div>
        </Modal>
    );
}

export default LoginForm;