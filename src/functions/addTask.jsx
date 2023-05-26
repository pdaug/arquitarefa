import axios from "axios";

import api from "../constants/api.jsx";

async function addTask({ category, executor, describe, equip, setTasks }) {
    
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

        setTasks(result.data);

    }

    catch(erro) {

        console.log(erro);

    }
    

}

export default addTask;