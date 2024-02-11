import axios from "axios";

const istance = axios.create({
    baseURL  : "https://jsonplaceholder.typicode.com"
})

export default istance