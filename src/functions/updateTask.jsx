import axios from "axios";

function updateTask({ _id, category }) {

    return axios({

        method: "PUT",

        url: "http://arquitarefa-api.vercel.app/api",

        data: {

            _id,

            category,

        },

    });

}

export default updateTask;