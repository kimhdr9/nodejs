const url = require('url');

const myUrl= new URL('http://mywebsite.com:8080/hello.htlm?id=100&status=active');

//  Serialized URL

console.log(myUrl.href);

//  Host or domain

console.log(myUrl.hostname);
// with the port
console.log(myUrl.host);
// pathname
console.log(myUrl.pathname);
// serialized query
console.log(myUrl.search);
// object Params
console.log(myUrl.searchParams);
// Add param
myUrl.searchParams.append('abc','123');
console.log(myUrl.searchParams);
//Loop through params
myUrl.searchParams.forEach((value,name)=>console.log(`${name}:${value}`));
