// Import Dependencies:

const express = require("express")

const app = express()

// Models
const element =["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]


// Routes:
app.get("/greeting", (req, res)=>{
    res.send("Hello Stranger")
})
app.get("/greeting/:name", (req, res)=>{
    const givenName = req.params.name
    res.send(`Wow! Hello there, ${givenName} `)
})

app.get("/tip/:total/:tipPercentage", (req, res)=>{
    const tot = req.params.total
    const tipPer = req.params.tipPercentage
    const totalTips = (tipPer/tot)*100
    res.send(`The tip of ${tot} dollar with ${tipPer} percentage tip is $${totalTips}`)

})
app.get("/magic/:question", (req, res)=>{
    const que = req.params.question
    const response =element[Math.floor(Math.random() * element.length)]
    res.send(`<h1> ${que}</h1><br><h3><span style= "color:red" > Answer:</span> ${response}</h3>`)
})





// Listener
app.listen(3500,()=>{
    console.log(`Port 3500 is up and Running`);
})