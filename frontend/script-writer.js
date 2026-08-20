console.log("SCRIPT JS LOADED");

const button = document.getElementById("generateScript");
const result = document.getElementById("scriptResult");

button.addEventListener("click", function () {

    console.log("BUTTON CLICKED");

    result.innerHTML = `
        <div style="padding:30px;">
            <h2>✅ JavaScript အလုပ်လုပ်နေပါတယ်</h2>
            <p>Generate Script button က အလုပ်လုပ်ပါတယ်။</p>
        </div>
    `;

});
