const http = require("http"); //node ko server create gardinchha

// aba http bata euta server banaune

const server = http.createServer((req, res)=>{
    res.end("hello world")
}) //server banyo, server side application chai load garnu paryo tyo vaneko express application ho
// express application lai createServer function ko argumr=ent ma mount garne jasle garda node ko server ma express ko application execute garna thalchha

// excute kaha garne tw ? tei vayera listen garne.. kun port ma ?
server.listen(9006,"127.0.0.1",(err)=>{
    if(!err){
        console.log("Server is running ....")
        console.log("Press ctrl+c to discontinue ...")
    } 
} )
