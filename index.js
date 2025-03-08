const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

function generatePassword() {
    let password = ""
    for (let i = 0; i < 15; i++) {
        let randomIndex = Math.floor(Math.random() * characters.length)
        password = password + characters[randomIndex]
    }
    return password
}

function generatePasswords() {
    let passwordOne = document.getElementById("passwordOne")
    let passwordTwo = document.getElementById("passwordTwo")
    
    passwordOne.textContent = generatePassword()
    passwordTwo.textContent = generatePassword()
}

// Wait for DOM to load before generating initial passwords
document.addEventListener('DOMContentLoaded', function() {
    generatePasswords()
})