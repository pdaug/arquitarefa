import updateTask from "../functions/updateTask.jsx";
import { categoryToNumber } from "../functions/categoryConverter.jsx";

function AllowDrop(event) {

    event.preventDefault();

}

async function Drop({ event, title }) {

    event.preventDefault();

    const _id = event.dataTransfer.getData("card");

    if (event.target.id === "section") 

        await updateTask({ _id, category: categoryToNumber({ string: title }) });

}

export {

    AllowDrop,

    Drop

};