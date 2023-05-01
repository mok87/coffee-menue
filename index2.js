const coffeeMenu = require("./index1")
//Print an array of all the drinks on the menu.
//Print an array of drinks that cost 5 and under
//Print an array of drinks that are priced at an even number.
//Print the total if you were to order one of every drink.
//Print an array with all the drinks that are seasonal.
//Print all the seasonal drinks with the words "with imported beans" after the item name. For example: "affogato with imported beans"
const getDrinkName = () => {
    const menu =[]
for (let i = 0; i < coffeeMenu.length; i++) {
    let drink = coffeeMenu[i].name
    menu.push(drink)
}
console.log(menu)
}

getDrinkName()

const getDrinkName = ()