import axios from "axios";

function editTask({ _id, describe }) {

    return axios({

        method: "PATCH",

        url: "https://arquitarefa-api.vercel.app/api",

        data: {

            _id,

            describe,

        },

    });

}

export default editTask;