console.log("Smart Creator Voice Generator Loaded");


const button = document.getElementById("generateVoice");
const result = document.getElementById("voiceResult");


button.addEventListener("click", async () => {


    const text = document.getElementById("voiceText").value.trim();

    const language = document.getElementById("voiceLanguage").value;

    const voiceType = document.getElementById("voiceType").value;



    if (!text) {

        alert("Script ထည့်ပါ");

        return;

    }



    result.innerHTML = `

    <div style="padding:30px;">

        <h3>
        ⏳ Voice ဖန်တီးနေပါတယ်...
        </h3>

        <p>
        ခဏစောင့်ပါ
        </p>

    </div>

    `;



    try {


        const response = await fetch(

            "https://smart-creator-backend-production.up.railway.app/generate-voice",

            {

                method:"POST",

                headers:{

                    "Content-Type":"application/json"

                },


                body:JSON.stringify({

                    text:text,

                    language:language,

                    voice:voiceType

                })


            }

        );



        const data = await response.json();



        console.log(data);



        if(!response.ok){


            result.innerHTML = `

            <div style="padding:30px;">

            <h3>
            ❌ Voice Error
            </h3>

            <pre>
            ${JSON.stringify(data,null,2)}
            </pre>

            </div>

            `;


            return;

        }



        result.innerHTML = `

        <div style="padding:30px;">


        <h3>
        🎙️ Voice Ready
        </h3>


        <audio controls style="width:100%;">

        <source src="${data.audio}" type="audio/mp3">

        </audio>


        </div>

        `;



    }

    catch(error){


        result.innerHTML = `

        <div style="padding:30px;">

        <h3>
        ❌ Backend Connection Failed
        </h3>

        <p>
        ${error.message}
        </p>

        </div>

        `;


    }



});
