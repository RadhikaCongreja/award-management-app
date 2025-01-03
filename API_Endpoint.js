import { createServer } from "vite";

const http = require('./');
const server = createServer(http, (req, res)=>{
    if(req === '/api/awards'){
        res.end(Post("Add new Award to database"))
    }

    if(req === '/api/awards'){
        res.end(Get("Retrieve all awards"))
    }
    if(req === '/api/awards/:id'){
        res.end(Put("Update	an	existing	award's	details	or	progress."))
    }
    if(req === '/api/awards/:id' && value === 'id'){
        res.end(Delete("Delete	an	award	from	the	database"))
    }
})

server.listen(3003, ()=>{
    console.log("server is running");
})