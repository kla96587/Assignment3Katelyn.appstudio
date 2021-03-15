let cities = []
let doneWithCities = false
let ask = ""
let i = 0

while (doneWithCities == false) {
  ask = prompt("Do you have more cities? Yes or No?")
  if (ask == "Yes") {
  doneWithCities = false
  newCity = prompt ("Please Enter a new city")
  cities.push(newCity)
} else {
    doneWithCities = true
}
}

while (i < cities.length) {
    console.log(cities[i].toLowerCase)
    i += 1
} 