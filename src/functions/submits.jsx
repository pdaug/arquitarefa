import addTask from "../functions/addTask.jsx";
import editTask from "../functions/editTask.jsx";
import { categoryToNumber } from "../functions/categoryConverter.jsx";
import { setExecutor } from "../Storage/Executor.jsx";

function submitEnterEquip({ event, navigate }) {

    event.preventDefault();

    const equip = event.target.equip.value;

    navigate("/equip/" + equip);

}

async function submitAddTask({ event, navigate, equip }) {

    event.preventDefault();

    const category = event.target.category.value;

    const executor = event.target.executor.value;

    setExecutor(executor);

    const describe = event.target.describe.value;

    await addTask({ category: categoryToNumber({ string: category }), executor, describe, equip });

    navigate(-1);

}

async function submitEditTask({ event, navigate, id, equip }) {

    event.preventDefault();

    const describe = event.target.describe.value;
    
    await editTask({ _id: id, describe, equip });

    navigate(-1);

}

export {

    submitEnterEquip,

    submitAddTask,

    submitEditTask

}