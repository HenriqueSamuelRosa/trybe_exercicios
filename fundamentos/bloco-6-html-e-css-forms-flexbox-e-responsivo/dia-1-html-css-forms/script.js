let buttonCont = document.getElementById("buttons")
let createBTN = document.createElement('button')
buttonCont.appendChild(createBTN)
createBTN.innerText = "Limpar"
createBTN.id = "btnClear"
createBTN.setAttribute("type", "reset")
createBTN.className = "btn btn-outline-danger"