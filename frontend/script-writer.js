console.log("Smart Creator Script Writer Loaded");


const generateButton = document.getElementById("generateScript");
const resultBox = document.getElementById("scriptResult");


generateButton.addEventListener("click", async () => {


    const topic = document.getElementById("topic").value;

    const type = document.getElementById("contentType").value;

    const style = document.getElementById("writingStyle").value;

    const language = document.getElementById("language").value;

    const length = document.getElementById("scriptLength").value;



    if(topic.trim() === ""){

        alert("Topic ထည့်ပါ");
        return;

    }



    resultBox.innerHTML = `

    <div class="result-loading">

        ⏳ AI Script ဖန်တီးနေပါတယ်...

    </div>

    `;



    try{


        const response = await fetch(
            "https://smart-creator-backend-production.up.railway.app/generate-script",
            {

                method: "POST",

                headers: {

                    "Content-Type": "application/json"

                },

                body: JSON.stringify({

                    prompt: `

You are Smart Creator AI Script Writer.

Create a ${type} script.

Language: ${language}

Writing Style: ${style}

Length: ${length}


Topic:

${topic}


Make the script engaging, cinematic and suitable for content creators.

                    `

                })

            }

        );



        const data = await response.json();



        if(data.result){


            resultBox.innerHTML = `

            <div class="generated-content">

                <h2>🎬 AI Generated Script</h2>

                <p>${data.result.replace(/\n/g,"<br>")}</p>

            </div>

            `;


        }else{


            resultBox.innerHTML = `

            <p>
            ❌ AI Response Error
            </p>

            <pre>${JSON.stringify(data,null,2)}</pre>

            `;


        }



    }catch(error){


        resultBox.innerHTML = `

        <div>

        ❌ Error: ${error.message}

        </div>

        `;


        console.log(error);


    }


});




// Copy Script Button

const copyButton = document.getElementById("copyScript");


if(copyButton){

    copyButton.addEventListener("click",()=>{


        const text = resultBox.innerText;


        navigator.clipboard.writeText(text);


        alert("Script Copied ✅");


    });

}
