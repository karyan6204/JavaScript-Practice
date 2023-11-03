const http = require('http');

const hostname = '127.0.0.2';
const port = 3000;

const url = require('url');

const server = http.createServer((req, res)=>{
    // res.statusCode = 200;
    // res.setHeader('Content-Type', 'text/plain');
    const route = req.url;
    if(route === '/'){
        res.end("This is information from backend to homepage");
    }
    if(route === '/usernames'){
        const user = ['Rohit Sharma', 'Virat Kohli', 'MS Dhoni', 'Sachin Tendulkar'];
        res.end(JSON.stringify(user));
    }
    // res.end("Hello World");
});
server.listen(port, hostname, ()=>{{
    console.log(`Server is running at http://${hostname}:${port}/`);
}});