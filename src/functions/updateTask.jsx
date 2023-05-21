import axios from "axios";

import api from "../constants/api.jsx";

async function updateTask({ _id, category }) {

    const result = await axios({

        method: "PUT",

        url: api,

        data: {

            _id,

            category,

        },

    });

    console.log(result.data);
   
    window.location.reload();

}

export default updateTask;