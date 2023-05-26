import addTask from "../functions/addTask.jsx";
import editTask from "../functions/editTask.jsx";
import { setExecutor } from "../Storage/Executor.jsx";

function submitEnterEquip({ event, navigate }) {

    event.preventDefault();

    const equip = event.target.equip.value;

    navigate("/equip/" + equip);

}

async function submitAddTask({ event, navigate, equip, setTasks }) {

    event.preventDefault();

    const category = event.target.category.value;

    const executor = event.target.executor.value;

    setExecutor(executor);

    const describe = event.target.describe.value;

    await addTask({ category: parseInt(category), executor, describe, equip, setTasks});

    navigate(-1);

}

async function submitEditTask({ event, navigate, id, equip, setTasks }) {

    event.preventDefault();

    const describe = event.target.describe.value;
    
    await editTask({ _id: id, describe, equip, setTasks });

    navigate(-1);

}

export {

    submitEnterEquip,

    submitAddTask,

    submitEditTask

}