const http = require('http');

const fs = require('fs');
const e = require('express');

const server = http.createServer((req, res) => {
    console.log("Requested url : " + req.url, "\n Requested Method : " + req.method);

    res.setHeader('Content-type', 'text/html');

    let path = "./docs/";

    switch (req.url) {

        case '/':
            path += 'example.html';
            break;
        case '/about':
            path += 'about.html';
            break;
        case '/blogs':  // directing multiple pages to one address
        case '/blog':
            path += 'blog.html';
            break;
        case '/index':
            res.writeHead(302, { 'Location': '/' }); // Redirecting in Node (for temp redirect status code - 302. for permanent redirect status code - 301)
            res.end();
            break;

        default:
            res.statusCode = 404;
            path += '404.html'
            break;


    }

    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err);
            res.end("ended with an error");
        }
        else {
            res.write(data);
            res.end();

        }
    })
});

server.listen(8081, () => {
    console.log("\nFinished listening!");
})