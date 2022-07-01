const express = require('express')
const path = require('path')
const app = express()
const port = 3000

/* The app.use() function is used to mount the specified middleware function(s) at the path which is being specified. It is mostly used to set up middleware for your application. */

app.use(express.static(path.join(__dirname, "public")))

/* Creating and Sending text or html to server using Express */
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, './docs/about.html'))
})

app.get('/bootstrap', (req, res) => {
    res.sendFile(path.join(__dirname, './bootstrap.html'))
    // res.status(404) to change status code
})

app.get('/404', (req, res) => {

    res.json({ "Error": "There is an error" })
});




app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})


