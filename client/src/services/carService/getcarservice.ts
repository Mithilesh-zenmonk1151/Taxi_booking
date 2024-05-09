import axios from "axios";
import type { FieldValues } from "react-hook-form";
const fetchCars = async (inputs: FieldValues) => {
    try {
        console.log("IIINNNPPUUUTT", inputs);
        const response = await axios.get("api/car/getcars", { params: inputs });
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error("Error fetching tests:", error);
        return null;
    }
};
export default fetchCars;