import { Dispatch, SetStateAction } from "react"
import PropTypes from 'prop-types';

interface RegisterProps {
    setShowSetup : Dispatch<SetStateAction<string>>
}

const Register: React.FC<RegisterProps> = ({setShowSetup}) => {
    return(<div>

    </div>)
}
export default Register

Register.propTypes = {
    setShowSetup : PropTypes.func.isRequired
}