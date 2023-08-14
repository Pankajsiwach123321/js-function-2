let p = document.querySelector("p")
let add = document.querySelector(".add")
let subtract = document.querySelector(".subtract")
let multiply = document.querySelector(".multiply")
add.addEventListener("click", function () {
    p.innerHTML = +p.innerHTML + 1;
})
subtract.addEventListener("click", function () {
    p.innerHTML = +p.innerHTML - 1;
})
multiply.addEventListener("click", function () {
    p.innerHTML = +p.innerHTML * 2;
})