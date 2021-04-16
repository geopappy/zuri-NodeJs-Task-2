
const url = 'http://jsonplaceholder.typicode.com/posts'

const http = require("http");
const fs = require("fs")

http.get(url, res =>{
    let data = ''
   res.on('data', (chunk) =>{
       data += chunk

   })

   res.on('end', () =>{
    const users = JSON.parse(data)
   

    fs.writeFile('./result/posts.json', JSON.stringify(users), (err) =>{
            if(err) throw err
        });
   })
}).on('error', err => {
       console.log('Error: ', err.message);
     });

    
