let localStorageArray = localStorage.getItem(0)
localStorageArray = JSON.parse(localStorageArray)

let button1 = document.getElementById("button1")

let getDetails = () => {
    let allInputs = document.getElementsByTagName("input")
    let itemName = allInputs[0].value
    let description = allInputs[1].value
    let category =allInputs[2].value
    let quantity = allInputs[3].value

    let inputsObject = {
        itemName,
        description,
        category,
        quantity
    }
    localStorageArray.push(inputsObject)
    localStorage.setItem(0, JSON.stringify(localStorageArray))

    console.log(localStorageArray)
    // console.log(description)
    // console.log(category)
    // console.log(quantity)
    clearInputFields()
}




let clearInputFields = () => {
    let allInputs = document.getElementsByTagName("input")
    for (input of allInputs){
        input.value = ""
    }


}


button1.addEventListener("click", getDetails)