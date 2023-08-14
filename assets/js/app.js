let p = document.querySelector("p")
let add = document.querySelector(".add")
let subtract = document.querySelector(".subtract")
let reset = document.querySelector(".reset")
add.addEventListener("click", function () {
    p.innerHTML = +p.innerHTML + 1;
})
subtract.addEventListener("click", function () {
    p.innerHTML = +p.innerHTML - 1 ;
})
reset.addEventListener("click", function () {
    p.innerHTML = +p.innerHTML - +p.innerHTML;
})