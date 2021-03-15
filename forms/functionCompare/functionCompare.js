//Get 2 passwords
let firstPassword = prompt("Enter a password: ")
let secondPassword = prompt("Enter a second password: ")

//Compare password 1 to password 2
function compare(pass1, pass2) {
   let isequal = pass1.localeCompare(pass2)
   return (isequal == 0) ? "The passwords are the same": "The passwords are not the same"
}

//Call the function
console.log(compare(firstPassword, secondPassword))