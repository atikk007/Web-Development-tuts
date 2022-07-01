const express = require('express')
const path = require("path")
const app = express()
const port = 4000

/* The app.use() function is used to mount the specified middleware function(s) at the path which is being specified. It is mostly used to set up middleware for your application. */

app.use(express.static(path.join(__dirname, "public")))

app.listen(port, () => {
    console.log(`Listening to port on : ${port}`);
})