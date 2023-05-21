import axios from "axios";
import api from "../constants/api.jsx";

async function editTask({ _id, describe, equip }) {
    
    const result = await axios({

        method: "PATCH",

        url: api + equip,

        data: {

            _id,

            describe,

        },

    });

    console.log(result.data);
   
    window.location.reload();

}

export default editTask;