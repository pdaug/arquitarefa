import updateTask from "../functions/updateTask.jsx";
import { categoryToNumber } from "../functions/categoryConverter.jsx";

function AllowDrop(event) {

    event.preventDefault();

}

async function DropUpdate({ event, title, equip }) {

    event.preventDefault();

    const _id = event.dataTransfer.getData("card");

    if (event.target.id === "section") 

        await updateTask({ _id, category: categoryToNumber({ string: title }), equip });

}

async function Drop(event) {

    event.preventDefault();

    const _id = event.dataTransfer.getData("card");

    const Card = document.getElementById(_id);

    if (event.target.id === "section") 

        event.target.appendChild(Card);

}

export {

    AllowDrop,

    DropUpdate,

    Drop

};