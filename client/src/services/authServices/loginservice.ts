
import axios from "axios";
import type {FieldValues} from "react-hook-form";

const loginService = async (inputs: FieldValues) => {
    const response = await axios.post("api/auth/login", inputs)
    console.log("yah service wala response haui",response)
    return response
}
export default loginService