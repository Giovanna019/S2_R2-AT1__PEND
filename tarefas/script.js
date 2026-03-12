document.getElementById("btn").addEventListener("click", function(){

let texto = document.getElementById("item").value

let li = document.createElement("li")

li.className = "list-group-item"

li.textContent = texto

document.getElementById("lista").appendChild(li)

})