const express = require("express");
const cors = require("cors");
require("dotenv").config();


const app = express();


app.use(cors());
app.use(express.json());



app.post("/generate-script", async (req, res) => {


    const { prompt } = req.body;


    try {


        const response = await fetch(
            "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=" + process.env.GEMINI_API_KEY,
            {

                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },


                body: JSON.stringify({

                    contents: [
                        {
                            parts: [
                                {
                                    text: prompt
                                }
                            ]
                        }
                    ]

                })

            }
        );



        const data = await response.json();



        res.json({

            result:
            data.candidates[0].content.parts[0].text

        });



    } catch(error){


        res.status(500).json({

            error:error.message

        });


    }



});




app.listen(3000,()=>{

console.log("Smart Creator Backend Running");

});
