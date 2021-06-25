let localStorageArray = localStorage.getItem(0)
localStorageArray = JSON.parse(localStorageArray)

let button1 = document.getElementById("button1")

let getUpdate = () => {
    let allInputs = document.getElementsByTagName("input")
    let itemName = allInputs[0].value
    

    for (let count = 0; count < localStorageArray.length; count++) {
        if (localStorageArray[count].itemName.toUpperCase() == itemName.toUpperCase() || localStorageArray[count].itemName.toLowerCase() == itemName.toLowerCase) {
            localStorageArray.splice(count,1)
        }
    }

    localStorage.setItem(0, JSON.stringify(localStorageArray))
    clearInputFields()
}




let clearInputFields = () => {
    let allInputs = document.getElementsByTagName("input")
    for (input of allInputs) {
        input.value = ""
    }


}


button1.addEventListener("click", getUpdate)