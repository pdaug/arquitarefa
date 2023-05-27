function Drag(event) {

    const _id = event.target.id;

    event.dataTransfer.setData("card", _id);

}

export { Drag };