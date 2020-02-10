const favDinner = {
    name: "chicken noodle",
    size: "LARGE",
    sides: "rolls",
    vegetarian: false
}

const foodContainer = document.querySelector(".food")

for (const dinner of Object.entries(favDinner)) {
    foodContainer.innerHTML += `<div>${dinner[0]}: ${dinner[1]}</div>`
}