let servicesNav = document.querySelector("#services-navList")
let servicesItems = document.querySelector(".services-dropDown")

servicesNav.addEventListener("click", () => {
  servicesItems.classList.toggle("open")
})

// Mobile Menu Toggle
let hamburger = document.getElementById("hamburger")
let hamburgerServices = document.getElementById("hamburger-services")

hamburger.addEventListener("click", () => {
  hamburgerServices.classList.contains("hidden")
    ? hamburgerServices.classList.remove("hidden")
    : hamburgerServices.classList.add("hidden")
})
