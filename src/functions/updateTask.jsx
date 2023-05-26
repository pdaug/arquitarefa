import axios from "axios";

import api from "../constants/api.jsx";

async function updateTask({ _id, category, equip, setTasks }) {

    try {

        const result = await axios({

            method: "PUT",
    
            url: api + equip,
    
            data: {
    
                _id,
    
                category,
    
            },
    
        });
    
        setTasks(result.data);

    }

    catch(erro) {

        console.log(erro);

    }

}

export default updateTask;