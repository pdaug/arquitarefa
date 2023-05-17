import axios from "axios";

function getTasks() {

    return axios({

        method: "GET",

        url: "https://arquitarefa-api.vercel.app/api",
        
    });

}

export default getTasks;