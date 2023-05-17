import axios from "axios";

function addTask({ category, executor, describe }) {

    return axios({

        method: "POST",

        url: "https://arquitarefa-api.vercel.app/api",

        data: {

            category,

            executor,

            describe

        },

    });

}

export default addTask;