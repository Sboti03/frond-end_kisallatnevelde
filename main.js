let foodValue = [
    100,
    200,
    300
]


let total = 0;


function init() {
    document.getElementById('hamburger').addEventListener('click', addFood)
    document.getElementById('pizza').addEventListener('click', addFood)
    document.getElementById('milk').addEventListener('click', addFood)
    document.getElementById('default').addEventListener('click', setToDefault)
}



function addFood(e) {
    
    let value;
    let food;

    switch(e.target.id) {
        case "hamburger":
            value = foodValue[0]
            food = "Hamburger"
            break
        case "pizza":
            value = foodValue[1]
            food = "Pizza"
            break
        case "milk":
            value = foodValue[2]
            food = "Milk"
            break
    }

    let list = document.getElementById('list')
    let liElement = document.createElement('li')
    liElement.textContent = food + " (" + value + ")"
    
    total += value;
    document.getElementById('total').textContent =  "Összesen: " + total

    let delBtn = document.createElement('button')
    delBtn.textContent = 'X'
    function deleteElement() {
        total -= value
        console.log(value)
        document.getElementById('total').textContent =  "Összesen: " + total
        liElement.remove()
    }
    delBtn.addEventListener('click', deleteElement)
    delBtn.classList.add('deleteBtn')
    liElement.appendChild(delBtn)
    liElement.classList.add("listElement")

    list.appendChild(liElement)
}



function setToDefault() {
    total = 0;
    document.getElementById('total').textContent =  "Összesen: " + total
    let list = document.getElementById('list')
    list.innerHTML = ""
}


document.addEventListener('DOMContentLoaded', init)