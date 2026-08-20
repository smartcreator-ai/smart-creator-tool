alert("SCRIPT JS WORKING!");

const button = document.getElementById("generateScript");
const result = document.getElementById("scriptResult");

if (button) {

    button.onclick = function () {

        result.innerHTML = `
            <div style="padding:30px;">
                <h2>✅ JavaScript အလုပ်လုပ်နေပါတယ်</h2>
                <p>Generate Script Button အလုပ်လုပ်ပါတယ်။</p>
            </div>
        `;

    };

}
