import axios from "axios";

function deleteTask({ _id }) {

    if (confirm("Deseja concluir a segunte tarefa?"))

        return axios({

            method: "DELETE",

            url: "https://arquitarefa-api.vercel.app/api",

            data: {

                _id,

            },

        });

}

export default deleteTask;