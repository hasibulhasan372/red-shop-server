const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;


// Middleware 
app.use(cors())
app.use(express.json())



app.get("/", (req, res) =>{
    res.send("Shop is open now")
});


app.listen(port, () =>{
console.log(`Red Shop is running on server: ${port}`)
})



