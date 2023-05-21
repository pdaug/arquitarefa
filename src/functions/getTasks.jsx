import axios from "axios";
import { useState, useCallback, useEffect } from "react";

import api from "../constants/api.jsx";

function getTasks() {

    const [ tasks, setTasks ] = useState([]);

    const [ loaded, setLoaded ] = useState(false);

    const getRequestTasks = useCallback(async function() {

        const results = await axios({

            method: "GET",
    
            url: api,
            
        });

        setTasks(results.data);

        setLoaded(true);

    }, []);

    useEffect(function() {

        getRequestTasks();

    }, [ getRequestTasks ]);

    return { 
        
        tasks,

        loaded
    
    };

}

export default getTasks;