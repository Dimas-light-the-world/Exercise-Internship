const getElement=(identifier="")=>document.querySelector(identifier);

function addTask(){
    let name = getElement("#name").value;
    let subject =  getElement("#subject").value;
    let message = getElement("#message").value;

    if (name && subject && message){
        alert("Filled Successfully")
    }

    if(!name && !subject && !message) {
        alert("Please fill the form completely");
        return;
    }
}

getElement("#submit").addEventListener("click", addTask)

