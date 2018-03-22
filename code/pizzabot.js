const vegetarian = "Vegetarian Pizza"
const hawaiian = "Hawaiian Pizza"
const pepperoni = "Pepperoni Pizza"

const pizzaPrice = 80

//Put your Javscript code here:
const checkOrderName = (orderName) => {
  if(orderName === "vegetarian" || orderName === "hawaiian" || orderName === "pepperoni") {
    return true
  } else {
    return false
  }
}

const totalCost = (orderQuantity ) => {
  const orderTotal = orderQuantity * pizzaPrice
  return orderTotal
}

const cookingTime = (orderQuantity) => {
  if (orderQuantity < 3) {
    return 10
 } else if (orderQuantity < 6) {
    return 15
} else {
    return 20
  }
}

alert(`Hey! Happy to serve your pizza. On our menu we have ${vegetarian}, ${hawaiian} and ${pepperoni}`)
const orderName = prompt("Enter the name of the pizza you want to order today.")
const isOrderNameValid = checkOrderName(orderName)

if(isOrderNameValid) {
  const orderQuantity = prompt(`How many ${orderName} do you want?`)
  const theOrderTotal = totalCost(orderQuantity)
  const totalCookingTime = cookingTime(orderQuantity)
  alert(`Great, I'll get started on your ${orderName} right away, it will cost ${theOrderTotal} kr. The pizzas will take ${totalCookingTime} minutes.`)
} else {
  alert("We don't have this pizza type!")
}
