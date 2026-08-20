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
            "http://localhost:3000/generate-script",
            {

                method:"POST",

                headers:{

                    "Content-Type":"application/json"

                },


                body:JSON.stringify({

                    prompt:`

You are an AI Script Writer.

Create a ${type} script.

Language: ${language}

Style: ${style}

Length: ${length}


Topic:

${topic}


Make it engaging for content creators.

                    `

                })

            }

        );



        const data = await response.json();



        resultBox.innerHTML = `

        <div class="generated-content">

            <h2>🎬 AI Generated Script</h2>

            <p>${data.result}</p>

        </div>

        `;



    }catch(error){


        resultBox.innerHTML = `

        <p>
        ❌ Backend connection failed.
        </p>

        `;


        console.log(error);


    }



});
