import axios from "axios";

const axiosClient = axios.create({
    baseUrl: "https://api.themoviedb.org/3",
});

// console.log(instance);

export default axiosClient;


