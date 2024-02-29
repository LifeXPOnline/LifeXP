import {IUseInputField, useInputField} from "../../../Hooks";
import {FormButton, FormContainer, FormTextFields, Modal} from "../../Forms";
import {GameIcon} from "../../Icons";
import {NavLink} from "react-router-dom";

interface ILoginForm {
    isOpen: boolean;
}

const Login = ({isOpen}: ILoginForm) => {
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
                <FormContainer className="flex flex-col space-y-6 items-center justify-center rounded-xl border-black w-[320px] h-[480px] border-1 shadow-sharp-md" sumbitHandler={handleLogin}>
                    <GameIcon width="30" height="30" />
                    <FormTextFields required={true} inputHook={email} id="email" label="Email:" />
                    <FormTextFields required={true} inputHook={pw} label="Password:" id="pw" />
                    <label className="align-self-start text-xs" htmlFor="rememberpw">
                        <input name="remember" id="rememberpw" {...rememberpw} /> Remember my password
                    </label>
                    <button type="submit" className="bg-quest-gray2 border-[1.5px] border-black text-white 
                                w-7/12 h-10 rounded-md text-md hover:bg-quest-gray4">
                        Login
                    </button>
                    <footer className="p-5 w-full text-sm text-center underline">
                        <div className="mb-5 flex flex-row justify-evenly">
                            <a href="#">Forgot password?</a>
                            <NavLink to={"/register"}>
                                Don't have an account?
                            </NavLink>
                        </div>
                        <a href="#">Login as Guest</a>
                    </footer>
                </FormContainer>
            </div>
        </Modal>
    );
}

export default Login;
