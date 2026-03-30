const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];




let p1El = document.getElementById("password-1")
let p2El = document.getElementById("password-2")
let button = document.getElementById("generate")

function generateRandomPassword(){
    let password = ""
    for(let i =0; i<10; i+=1){
        password += characters[Math.floor(Math.random()*characters.length)]
    }
    return password
}

button.addEventListener("click", function(){
    p1El.textContent = generateRandomPassword()
    p2El.textContent = generateRandomPassword()
})