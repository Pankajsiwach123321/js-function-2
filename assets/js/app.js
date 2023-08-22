let p = document.querySelector("#p")
let add = document.querySelector(".add")
let subtract = document.querySelector(".subtract")
let reset = document.querySelector(".reset")
let save = document.querySelector("#save")
let savenumber = document.querySelector("#savenumber")

add.addEventListener("click", function () {
    p.innerHTML = +p.innerHTML + 1;
    save.classList.remove("disable")
})
subtract.addEventListener("click", function () {
    p.innerHTML = +p.innerHTML - 1;
})
reset.addEventListener("click", function () {
    p.innerHTML = 0;
    savenumber.innerHTML = 0;
})
save.addEventListener("click", function () {
    if (p.innerHTML == 0) {
        save.classList.add("disable")
        alert ("not save 0!!!")
    } else if (p.innerHTML != 0) {

        if (savenumber.innerHTML == 0) {
            savenumber.innerHTML = p.innerHTML;
        } else {
            savenumber.innerHTML += "," + p.innerHTML;
        }  
    }
    p.innerHTML =0
})