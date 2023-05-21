import axios from "axios";

import api from "../constants/api.jsx";

async function addTask({ category, executor, describe }) {

    const result = await axios({

        method: "POST",

        url: api,

        data: {

            category,

            executor,

            describe

        },

    });
    
    console.log(result.data);
   
    window.location.reload();

}

export default addTask;