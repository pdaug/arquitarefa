function getExecutor() {

    const executor = localStorage.getItem("executor");

    return executor || "";

}

function setExecutor(string) {

    localStorage.setItem("executor", string);

}

export {
  
    getExecutor,

    setExecutor

};