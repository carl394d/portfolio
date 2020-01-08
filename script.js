window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("sidenVises");
    document.querySelector("#menuknap").addEventListener("click", toggleMenu);
}

function toggleMenu() {
    console.log("toggleMenu");
    document.querySelector("#menu").classList.toggle("hidden");
}



var slideIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.querySelectorAll(".mySlides");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > x.length) {
        slideIndex = 1
    }
    x[slideIndex - 1].style.display = "block";
    setTimeout(carousel, 2000);
}

// Object of keys we allow

const allowedKeys = {

    37: 'left',

    38: 'up',

    39: 'right',

    40: 'down',

    65: 'a',

    66: 'b'

};



// Konami code array

let konamiCode = ['up', 'up', 'down', 'down', 'left', 'right', 'left', 'right', 'b', 'a'];



// Current number of keys in array

let konamiCodePosition = 0;



// Call funciton when keys are pressed

document.addEventListener('keydown', konami);



// Konami Function

function konami(parm) {

    // Get value of key from Object

    let key = allowedKeys[parm.keyCode];



    // Get value of key from Konami code array

    let requiredKey = konamiCode[konamiCodePosition];



    // Check if the pressed key and the array are the same

    if (key == requiredKey) {

        // If they are the same



        // Increment with 1 to get the next number on the next click

        konamiCodePosition++;



        // If click-number and the length of the konami code is the same, the konami code is done

        if (konamiCodePosition == konamiCode.length) {



            // Call the activation function

            activateCheats();



            // Reset the position number

            konamiCodePosition = 0;

        }

    } else {

        // If they are NOT the same



        // Reset the position number

        konamiCodePosition = 0;

    }

}



// Function for when the konami code has been correctly inputtet

function activateCheats() {



    // Variable for the image

    const x = document.querySelector("#profile_image");



    // Add animation class

    x.classList.add("konami");



    // Disable the konami code

    konamiCode = [];



    // Timer with amount of time the animation takes

    setTimeout(() => {



        // Remove the animation class

        x.classList.remove("konami");



        // Reable the konami code

        konamiCode = ['up', 'up', 'down', 'down', 'left', 'right', 'left', 'right', 'b', 'a'];

    }, 4000);

}
