// Import Dependencies:

const express = require("express")

const app = express()


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





// Listener
app.listen(3500,()=>{
    console.log(`Port 3500 is up and Running`);
})