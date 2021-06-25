let initializeInventory = () => {
    if (localStorage.getItem(0) == null) {
        let localStorageArray = []
        localStorage.setItem(0, JSON.stringify(localStorageArray))
    }
}

initializeInventory()


let localStorageArray = localStorage.getItem(0)
localStorageArray = JSON.parse(localStorageArray)

document.getElementById("ItemNo").innerHTML = localStorageArray.length;
document.getElementById("CategoryNo").innerHTML = 5

let StockNo = document.getElementById("StockNo")
let total = 0
for (let i = 0; i < localStorageArray.length; i++) {
    total += parseInt(localStorageArray[i].quantity)
}
StockNo.innerHTML = total;

let detailsTable = document.getElementById("detailsTable")

for (let i = 0; i<localStorageArray.length; i++){
    const tableDetailsRow = document.createElement("tr")
    tableDetailsRow.innerHTML = `
        <td>${localStorageArray[i].itemName}</td>
        <td>${localStorageArray[i].description}</td>
        <td>${localStorageArray[i].category}</td>
        <td>${localStorageArray[i].quantity}</td>
        <td class="colorIndicator"></td>
    `
    detailsTable.append(tableDetailsRow)
}

document.getElementById('myForm').addEventListener('submit', (e) => {
    e.preventDefault();

    const searchVar = document.getElementById("Search").value;
    clearSearchField();
    const result = localStorageArray.find(i => {
        return i.itemName === searchVar;
    })

    if (result == null) {

        alert("Item not found")

    } else {
        alert(`${result.itemName} ${result.description} ${result.category} ${result.quantity}`)
    };

}, false);

let clearSearchField = () => {
    let searchField = document.getElementById("Search");
    searchField.value = ""; 

}

let quantityColor = () => {
    let colorCell = document.getElementsByClassName("colorIndicator")

    for(let i = 0; i<localStorageArray.length; i++){
        if(localStorageArray[i].quantity == 0){
            colorCell[i].classList.add("redQuantity")
        }
        else if(localStorageArray[i].quantity > 0 && localStorageArray[i].quantity < 20){
            colorCell[i].classList.add("orangeQuantity")
        }
        else{
            colorCell[i].classList.add("greenQuantity")
        }
    }
}


quantityColor()