import axios from "axios";
import type { FieldValues } from "react-hook-form";
const updateCar= async (inputs: FieldValues) => {
    try {
        console.log("INNNPPUUTT", inputs);
        const response = await axios.put("api/car/updatecar", { params: inputs });
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error("Error fetching tests:", error);
        return null;
    }
};
export default updateCar;