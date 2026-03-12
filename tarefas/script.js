let input = document.getElementById("inputTarefa")
let lista = document.getElementById("listaTarefas")
let msg = document.getElementById("mensagem")

document.getElementById("btnAdicionar").addEventListener("click", function(){

let texto = input.value

msg.textContent = ""

if(texto === ""){
msg.textContent = "Tarefa vazia!"
msg.className = "text-danger"
return
}

let li = document.createElement("li")
li.className = "list-group-item"

let check = document.createElement("input")
check.type = "checkbox"

check.addEventListener("change", function(){

if(check.checked){
li.style.textDecoration = "line-through"
}else{
li.style.textDecoration = "none"
}

})

let remover = document.createElement("button")
remover.textContent = "Remover"
remover.className = "btn btn-danger btn-sm ms-2"

remover.addEventListener("click", function(){
li.remove()
})

li.appendChild(check)
li.append(" " + texto + " ")
li.appendChild(remover)

lista.appendChild(li)

input.value = ""

msg.textContent = "Tarefa adicionada!"
msg.className = "text-success"

})