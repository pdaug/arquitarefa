import axios from "axios";
import api from "../constants/api.jsx";

async function editTask({ _id, describe, equip, setTasks }) {
    
    try {

        const result = await axios({

            method: "PATCH",
    
            url: api + equip,
    
            data: {
    
                _id,
    
                describe,
    
            },
    
        });
    
        setTasks(result.data);
    
    }

    catch(erro) {

        console.log(erro);

    }
    
}

export default editTask;