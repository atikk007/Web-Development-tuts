const http = require('http');


const fs = require('fs'); // including the module to work with files


const server = http.createServer((req, res) => {
    console.log("Requested url : " + req.url, "\nRequested Method : " + req.method);

    // Set headers response 

    /*  res.setHeader('Content-Type', 'text/plain');
 
     res.write('hello ninjas'); */

    // Writing html - 

    /*    res.setHeader('Content-type', 'text/html');
   
       res.write('<p> Hello html bro </p>');
       res.write("<p>hello Atik bro<p>"); */

    // if we are sending only one line then we can directly write it in end - 

    /*  res.setHeader('Content-type', 'text/html');

    res.end("<p>My name is atik mansuri</p>"); */

    // Sending files to the browser 

    res.setHeader('Content-type', 'text/html');


    // Sending an html file (this makes our work easy than writing all html in res.write)

    fs.readFile('./docs/example.html', (err, data) => {
        if (err) {
            console.log(err);
            res.end();
        }
        else {
            res.write(data);
            res.end();
        }
    })
})


server.listen(5000, () => {
    console.log("Listening for requests on port 5000");
});