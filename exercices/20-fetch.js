const fetch = require("node-fetch");    

fetch("https://jsonplaceholder.typicode.com/users")
    .then((httpResponse) => httpResponse.text())
    .then((str) => JSON.parse(str))
    .then((users) => console.log(users));
    
    