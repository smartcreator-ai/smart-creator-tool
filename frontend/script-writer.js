console.log("Script Writer Loaded");


const generateButton = document.getElementById("generateScript");
const resultBox = document.getElementById("scriptResult");


if(generateButton){

    generateButton.onclick = function(){

        console.log("Generate Clicked");


        const topic = document.getElementById("topic").value;


        if(topic.trim() === ""){

            alert("Topic ထည့်ပါ");

            return;

        }


        resultBox.innerHTML = `

        <div>

        <h2>🎬 Generated Script</h2>

        <p>
        ${topic} အတွက် AI Script ဖန်တီးပြီးပါပြီ။
        </p>


        <p>
        ဒီနေရာမှာ နောက်ပိုင်း Gemini API ချိတ်ပြီး
        တကယ့် AI Script ထုတ်ပေးပါမယ်။
        </p>

        </div>

        `;


    };

}
else{

    console.log("Generate Button Not Found");

}
