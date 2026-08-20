console.log("Smart Creator Script Writer Loaded");

const generateButton = document.getElementById("generateScript");
const resultBox = document.getElementById("scriptResult");
const copyButton = document.getElementById("copyScript");

const BACKEND_URL =
    "https://smart-creator-backend-production.up.railway.app";


if (!generateButton) {
    console.error("Generate button not found");
}


generateButton.addEventListener("click", async function () {

    const topic =
        document.getElementById("topic").value.trim();

    const type =
        document.getElementById("contentType").value;

    const style =
        document.getElementById("writingStyle").value;

    const language =
        document.getElementById("language").value;

    const length =
        document.getElementById("scriptLength").value;


    if (!topic) {

        alert("Topic ထည့်ပါ");

        return;
    }


    // Loading
    resultBox.innerHTML = `
        <div class="result-loading">
            ⏳ AI Script ဖန်တီးနေပါတယ်...
        </div>
    `;


    const prompt = `
You are Smart Creator AI Script Writer.

Create a ${type} script.

Language: ${language}

Writing Style: ${style}

Script Length: ${length}

Topic:
${topic}

Write an engaging script suitable for content creators.
Use natural ${language}.
Return only the script.
`;


    try {

        console.log("Sending request to backend...");


        const response = await fetch(
            BACKEND_URL + "/generate-script",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    prompt: prompt
                })
            }
        );


        console.log(
            "Backend status:",
            response.status
        );


        const data = await response.json();


        console.log(
            "Backend response:",
            data
        );


        if (!response.ok) {

            resultBox.innerHTML = `
                <div class="result-error">

                    ❌ Backend Error

                    <pre>${JSON.stringify(
                        data,
                        null,
                        2
                    )}</pre>

                </div>
            `;

            return;
        }


        if (!data.result) {

            resultBox.innerHTML = `
                <div class="result-error">

                    ❌ AI က Script ပြန်မပေးပါ။

                    <pre>${JSON.stringify(
                        data,
                        null,
                        2
                    )}</pre>

                </div>
            `;

            return;
        }


        // SUCCESS
        resultBox.innerHTML = `
            <div class="generated-content">

                <h3>✨ Generated Script</h3>

                <div class="script-text">
                    ${escapeHTML(data.result)
                        .replace(/\n/g, "<br>")}
                </div>

            </div>
        `;


    } catch (error) {

        console.error(
            "Connection Error:",
            error
        );


        resultBox.innerHTML = `
            <div class="result-error">

                ❌ Backend connection failed.

                <br><br>

                <small>
                    ${escapeHTML(error.message)}
                </small>

            </div>
        `;

    }

});


// Copy Script
if (copyButton) {

    copyButton.addEventListener(
        "click",
        async function () {

            const text =
                resultBox.innerText.trim();


            if (!text) {

                alert("Copy လုပ်စရာ Script မရှိသေးပါ");

                return;
            }


            try {

                await navigator.clipboard.writeText(text);

                alert("Script Copied ✅");

            } catch (error) {

                alert("Copy မလုပ်နိုင်ပါ");

            }

        }
    );

}


// Prevent HTML injection
function escapeHTML(text) {

    const div =
        document.createElement("div");

    div.textContent = text;

    return div.innerHTML;

}
