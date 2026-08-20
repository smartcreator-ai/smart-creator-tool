// Smart Creator Tool - AI Script Writer


const generateButton = document.getElementById("generateScript");
const resultBox = document.getElementById("scriptResult");
const copyButton = document.getElementById("copyScript");


// Generate Script

generateButton.addEventListener("click", function(){

    const type = document.getElementById("contentType").value;
    const style = document.getElementById("writingStyle").value;
    const language = document.getElementById("language").value;
    const length = document.getElementById("scriptLength").value;
    const topic = document.getElementById("topic").value;


    if(topic.trim() === ""){

        alert("Please enter your topic!");

        return;

    }



    resultBox.innerHTML = `

    <div class="generated-content">

        <h3>🎬 AI Generated Script</h3>


        <p>
        <b>Content:</b> ${type}
        </p>


        <p>
        <b>Style:</b> ${style}
        </p>


        <p>
        <b>Language:</b> ${language}
        </p>


        <p>
        <b>Length:</b> ${length}
        </p>


        <hr>


        <h3>${topic}</h3>


        <p>

        ဇာတ်လမ်းအစမှာ ${topic} ဟာ 
        စိတ်ဝင်စားဖွယ်ကောင်းတဲ့ အဖြစ်အပျက်တစ်ခုနဲ့ စတင်ပါတယ်။

        <br><br>

        အဓိကဇာတ်ကောင်ဟာ မမျှော်လင့်ထားတဲ့ 
        အခက်အခဲများကို ရင်ဆိုင်ရပြီး 
        သူ့ရဲ့စွမ်းရည်နဲ့ ကြိုးစားမှုကို အသုံးပြုပြီး 
        အောင်မြင်အောင် ကြိုးစားသွားပါတယ်။

        <br><br>

        ဒီ Script ကို AI က ${style} ပုံစံနဲ့ 
        ဖန်တီးပေးထားပါတယ်။

        </p>


    </div>

    `;


});




// Copy Script

copyButton.addEventListener("click", function(){


    const text = resultBox.innerText;


    navigator.clipboard.writeText(text);


    alert("Script Copied!");



});
