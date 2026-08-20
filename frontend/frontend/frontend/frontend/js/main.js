// Smart Creator Tool Main JavaScript

// Start Creating Button
const startButton = document.querySelector(".primary-btn");

if (startButton) {
    startButton.addEventListener("click", () => {

        const features = document.querySelector(".features");

        if (features) {
            features.scrollIntoView({
                behavior: "smooth"
            });
        }

    });
}


// Explore Features Button
const exploreButton = document.querySelector(".secondary-btn");

if (exploreButton) {

    exploreButton.addEventListener("click", () => {

        const features = document.querySelector(".features");

        if (features) {
            features.scrollIntoView({
                behavior: "smooth"
            });
        }

    });

}


// Login Button
const loginButton = document.querySelector(".login-btn");

if (loginButton) {

    loginButton.addEventListener("click", () => {

        alert("Login System Coming Soon");

    });

}


console.log("Smart Creator Tool Loaded 🚀");
