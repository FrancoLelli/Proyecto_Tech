const hamburger = document.querySelector(".hamburger")
const navMenu = document.querySelector(".nav-menu")

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active")
    navMenu.classList.toggle("active")
})

document.querySelectorAll('.nav-menu').forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active")
    /* navMenu.classList.remove("active") */
}))


anio = new Date().getFullYear()

if(anio == "2023"){

    document.getElementById("year").innerHTML = "2022 / 2023"
}else{
    document.getElementById("year").innerHTML = "2022"
}


