import {useInputField, IUseInputField} from "../../../Hooks";
import {LogoWithBrandName} from "../../Reusables";
import {FormContainer, FormTextFields} from "../../Forms";
import {NavLink} from "react-router-dom";
import {register} from "../../../services/auth";


const Register = () => {
    const email: IUseInputField = useInputField("email");
    const pw: IUseInputField = useInputField("password");
    const confirmpw: IUseInputField = useInputField("password");
    const firstName: IUseInputField = useInputField("text");
    const lastName: IUseInputField = useInputField("text");

    const handleRegister = async (event: React.SyntheticEvent): Promise<void> => {
        event.preventDefault();
        if (pw.value === confirmpw.value) {
            const registerData = {email: email.value, password: pw.value, lastName: lastName.value, firstName: firstName.value};
            const registerRes = await register(registerData);
        } else {
            console.log("Passwords don't match");
        }
    }

    return (
        <div className="h-screen p-6 flex flex-col items-center justify-center">
            <FormContainer className="flex flex-col space-y-6 items-center justify-center rounded-xl border-black w-[380px] h-[540px] border-1 shadow-sharp-md" sumbitHandler={handleRegister}>
                <LogoWithBrandName />
                <FormTextFields required={true} inputHook={email} id="email" label="Email:" />
                <FormTextFields required={true} inputHook={pw} label="Password:" id="pw" />
                <FormTextFields required={true} inputHook={confirmpw} label="Confirm Password:" id="confirm" />
                <FormTextFields required={true} inputHook={firstName} label="First Name:" id="fname" />
                <FormTextFields required={true} inputHook={lastName} label="Last Name:" id="lname" />
                <div className="my-4 flex flex-row justify-between">
                    <button type="submit" className="bg-quest-gray2 border-[1.5px] border-black text-white 
                w-[50%] rounded-md text-md hover:bg-quest-gray4">
                        Register
                    </button>
                    <NavLink to={"/"}>
                        <p className="text-center underline">Already have an account?</p>
                    </NavLink>
                </div>
            </FormContainer>
        </div>
    );
}

export default Register;
