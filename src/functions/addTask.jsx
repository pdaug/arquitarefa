import axios from "axios";

import api from "../constants/api.jsx";

async function addTask({ category, executor, describe, equip }) {

    try {

        const result = await axios({

            method: "POST",

            url: api + equip,

            data: {

                category,

                executor,

                describe

            },

        });

        console.log(result.data);

        window.location.reload();

    }
    catch(erro) {

        console.log(erro);

    }
    

}

export default addTask;