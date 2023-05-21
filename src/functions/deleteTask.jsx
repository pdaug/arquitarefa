import axios from "axios";

import api from "../constants/api.jsx";

async function deleteTask({ _id }) {

    const answer = confirm("Deseja concluir a segunte tarefa?");

    if (answer) {

        const result = await axios({

            method: "DELETE",

            url: api,

            data: {

                _id,

            },

        });

        console.log(result.data);

        window.location.reload();

    }

}

export default deleteTask;