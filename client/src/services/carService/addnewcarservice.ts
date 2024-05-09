
import axios from "axios";
import type {FieldValues} from "react-hook-form";

const addCarService = async (inputs: FieldValues) => {
    const response = await axios.post("api/car/addnewcar", inputs)
    console.log(response)
    return response
}
export default addCarService;