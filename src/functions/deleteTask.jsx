import axios from "axios";

import api from "../constants/api.jsx";

async function deleteTask({ _id, equip, setTasks }) {

    try {

        const result = await axios({

            method: "DELETE",

            url: api + equip,

            data: {

                _id,

            },

        });

        setTasks(result.data);

    }

    catch(erro) {

        console.log(erro);

    }
   

}

export default deleteTask;