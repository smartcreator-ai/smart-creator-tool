// =================================
// Smart Creator Tool
// Script Writer Demo System
// =================================

const generateButton = document.getElementById("generateScript");
const scriptResult = document.getElementById("scriptResult");
const copyButton = document.getElementById("copyScript");


if (generateButton) {

    generateButton.addEventListener("click", () => {

        const topic =
            document.getElementById("topic").value.trim();

        const style =
            document.getElementById("writingStyle").value;


        if (!topic) {

            alert("Please enter your topic.");

            return;

        }


        scriptResult.innerHTML = `

        <div class="script-loading">

            <div class="loading-spinner"></div>

            <p>
                AI is creating your script...
            </p>

        </div>

        `;


        setTimeout(() => {


            const result = `

✨ AI GENERATED SCRIPT

Topic:
${topic}


Style:
${style}


━━━━━━━━━━━━━━


ဇာတ်လမ်းအစ

ဒီဇာတ်လမ်းဟာ ${topic} အကြောင်းကို
စိတ်ဝင်စားဖွယ်ပုံစံနဲ့ စတင်ထားပါတယ်။

အဓိကဇာတ်ကောင်ဟာ မမျှော်လင့်ထားတဲ့
အဖြစ်အပျက်တစ်ခုနဲ့ ရင်ဆိုင်ရပြီး
ဘဝပြောင်းလဲမယ့် ခရီးတစ်ခုကို စတင်ခဲ့ပါတယ်။


━━━━━━━━━━━━━━


အဓိကဖြစ်ရပ်

အခက်အခဲများကြားထဲမှာ
သူဟာ အမှန်တရားကို ရှာဖွေဖို့
ကြိုးစားခဲ့ပါတယ်။

ဒါပေမယ့် နောက်ကွယ်မှာ
မထင်မှတ်ထားတဲ့ လျှို့ဝှက်ချက်တစ်ခု
ရှိနေခဲ့ပါတယ်။


━━━━━━━━━━━━━━


အဆုံးသတ်

ဒီဇာတ်လမ်းဟာ နောက်ထပ်
စိတ်ဝင်စားစရာ အဖြစ်အပျက်တွေဆီကို
ဆက်လက်သွားပါတော့တယ်။

(Demo AI Output)

`;


            scriptResult.innerHTML = `

            <div class="generated-script">

                ${result}

            </div>

            `;


            generateButton.textContent =
            "✨ Generate Script";


        },1500);


    });

}



// Copy Button

if (copyButton) {

    copyButton.addEventListener("click", async()=>{


        const text =
        document.querySelector(".generated-script");


        if(text){

            await navigator.clipboard.writeText(
                text.innerText
            );


            copyButton.textContent =
            "Copied ✓";


            setTimeout(()=>{

                copyButton.textContent =
                "Copy";

            },1500);

        }


    });

}
