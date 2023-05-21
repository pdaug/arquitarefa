import axios from "axios";
import api from "../constants/api.jsx";

async function editTask({ _id, describe, equip }) {
    
    try {

        const result = await axios({

            method: "PATCH",
    
            url: api + equip,
    
            data: {
    
                _id,
    
                describe,
    
            },
    
        });
    
        console.log(result.data);
       
        //window.location.reload();

    }

    catch(erro) {

        console.log(erro);

    }
    
}

export default editTask;