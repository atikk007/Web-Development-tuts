const express = require('express')
const path = require('path')
const app = express()
const port = 3000


app.use(express.static(path.join(__dirname, "static")));

app.use('/', require(path.join(__dirname, "/routes/blog.js")))

// app.get('/', (req, res) => {
//     res.sendFile();
// })


app.listen(port, () => {
    console.log(`Index app listening on port http://localhost:${port}`)
})