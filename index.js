const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const fs = require('fs');
let index = '';


const server = http.createServer((req, res) => {

    if (req.url==='/') {
        fs.readFile('./index.html', (err, data) => {
            if (err) {
                console.log(err);
                return;
            }
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            res.end(data);
        })
    } else if (req.url==='/about'){
        fs.readFile('./about.html', (err, data) => {
            if (err) {
                console.log(err);
                return;
            }
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            res.end(data);
        })
    } else if (req.url==='/contact-me'){
        fs.readFile('./contact-me.html', (err, data) => {
            if (err) {
                console.log(err);
                return;
            }
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            res.end(data);
        })
    } else {
        fs.readFile('./404.html', (err, data) => {
            if (err) {
                console.log(err);
                return;
            }
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            res.end(data);
        })
        
    }
    
    
    

    // if (req.url==='/') {
    //     fs.readFile('./index.html', (err, data) => {
    //         if (err) {
    //             console.log(err);
    //             return;
    //         }
    //         res.statusCode = 200;
    //         res.writeHead('Content-Type', 'text/html');
    //         res.write(data, 'text/html');
    //     })
    // } else if (req.url==='/about') {
    //     fs.readFile('./about.html', (err, data) => {
    //         if (err) {
    //             console.log(err);
    //             return;
    //         }
    //         index = data;
    //         console.log('about')
    //     })
    // } else if (req.url==='/contact-me') {
    //     fs.readFile('./contact-me.html', (err, data) => {
    //         if (err) {
    //             console.log(err);
    //             return;
    //         }
    //         index = data;
    //     })
    //     console.log('contact-me')
    // } else {
    //     fs.readFile('./404.html', (err, data) => {
    //         if (err) {
    //             console.log(err);
    //             return;
    //         }
    //         index = data;
    //     })
    // }
    // res.statusCode = 200;
    // res.writeHead('Content-Type', 'text/html');
    // res.write(index);
    // return res.end;
})

server.listen(port, hostname, ()=> {
    console.log(`Server running at http://${hostname}:${port}/`);
})