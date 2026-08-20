// Smart Creator Tool Main JavaScript


console.log("Smart Creator Tool Loaded 🚀");


// Start Creating Button
const startButton = document.querySelector(".primary-btn");

if (startButton) {

    startButton.addEventListener("click", () => {

        window.location.href = "frontend/dashboard.html";

    });

}



// Login Button

const loginButton = document.querySelector(".login-btn");


if (loginButton) {

    loginButton.addEventListener("click", () => {

        window.location.href = "frontend/dashboard.html";

    });

}




// Explore Features Button

const exploreButton = document.querySelector(".secondary-btn");


if (exploreButton) {

    exploreButton.addEventListener("click", () => {

        const features =
        document.querySelector(".features");


        if(features){

            features.scrollIntoView({
                behavior:"smooth"
            });

        }

    });

}
