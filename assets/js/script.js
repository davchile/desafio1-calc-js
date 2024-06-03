precio = 400000
precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio

const buttonplus = document.querySelector("#btn-mas")
const buttonminus = document.querySelector("#btn-menos")
const result = document.querySelector("#cantidad")
const total = document.querySelector("#valor-total")

let counter = 0
buttonplus.addEventListener("click", ()=> {
    counter = counter + 1
    result.innerHTML = counter
    total.innerHTML = counter * precio
})
buttonminus.addEventListener("click", ()=> {
    counter = counter - 1
    result.innerHTML = counter
    total.innerHTML = counter * precio
})

