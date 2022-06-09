const http = require('http');
const url = require('url');

http.createServer((request, response) => {
    response.writeHead(200, 'text-html');

    response.write('<h1>Simple Calculator</h1>');

    let queryString = url.parse(request.url, true).query;

    response.write(calculate(queryString));

    response.end();
}).listen(3000);

console.log('App running on http://localhost:3000');

function calculate(urlString){
    let x = urlString.x;
    let y = urlString.y;
    let operation = urlString.method;
    var z;
    var operator;

    if(operation == 'add'){
        z = parseInt(x) + parseInt(y);
        operator = "+";
    }
    else if(operation == 'subtract'){
        z = x - y;
        operator = "-";
    }
    else if(operation == 'multiply'){
        z = x * y;
        operator = "*";
    }
    else if(operation == 'divide'){
        z = x / y;
        operator = "/";
    }
    else{
        return "Input Error!";
    }
    return `${x} ${operator} ${y} = ${z}`
}