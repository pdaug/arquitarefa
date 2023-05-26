import updateTask from "../functions/updateTask.jsx";

function AllowDrop(event) {

    event.preventDefault();

}

async function DropUpdate({ event, category, equip, setTasks }) {

    event.preventDefault();

    const _id = event.dataTransfer.getData("card");

    if (event.target.id === "section") 

        await updateTask({ _id, category: parseInt(category), equip, setTasks });

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