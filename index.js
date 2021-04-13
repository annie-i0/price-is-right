//In the initial commit to this project, you have been provided with files that contain a JavaScript module and some associated tests. 
//Your task is to implement a `calculateTotal` function that will return a new list of items 
//where each item has a new attribute called `total` with a value equal to the total price of that item. 

const calc = (items) => {
    items.total = Number(((items.price * items.quantity) - (items.price * items.quantity * items.discount)).toFixed(2))
    return items
}
    const calculateTotal = (items) => {

const total = items.map(calc)
return total

}

module.exports = calculateTotal