const express = require("express")

const app = express();

const PORT = process.env.PORT || 8080



app.listen(PORT, async () => {
    try {
        await connection;
        console.log("Connected to Mongo Atlas")
    }
    catch (err) {
        console.log("Error while connecting to db")
        console.log(err)
    }
    console.log(`listening on PORT ${PORT}`)
})