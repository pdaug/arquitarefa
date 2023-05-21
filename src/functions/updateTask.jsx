import axios from "axios";

import api from "../constants/api.jsx";

async function updateTask({ _id, category, equip }) {

    try {

        const result = await axios({

            method: "PUT",
    
            url: api + equip,
    
            data: {
    
                _id,
    
                category,
    
            },
    
        });
    
        console.log(result.data);
       
        window.location.reload();    

    }

    catch(erro) {

        console.log(erro);

    }

}

export default updateTask;