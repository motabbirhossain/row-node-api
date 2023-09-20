/*
 * Title: Uptime Monitoring Application
 * Description: A RESTFul API to monitor up or down time of user defined links
 * Author: Sumit Saha ( Learn with Sumit )
 * Date: 11/15/2020
 *
 */


//dependince
const { log } = require('console');
const http = require('http');

//app object
const app ={}

//configarations
app.config = {
    PORT:3030
}


//server
app.createServer = ()=>{
    const server = http.createServer(app.serverHandel);
    server.listen(app.config.PORT,()=>{
        console.log(`listen to port on ${app.config.PORT}`);
    })
};


app.serverHandel = (req,res)=>{
    res.end('hello Node');
}


app.createServer();