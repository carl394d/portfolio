window.addEventListener("load", load);

function load() {
    console.log("sidenvises");
    document.querySelector("#menuknap").addEventListener("click", burgerMenu);
}

function burgerMenu() {
    document.querySelector("#menu").classList.toggle("hidden");
}
