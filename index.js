const  http = require("http");
const fs = require("fs");
const requests =require("requests");
const homeFile =fs.readFileSync("index.html","utf-8");

const server = http.createServer((req,res)=>{
    if (req.url == "/") {
        requests(
          "https://api.openweathermap.org/data/2.5/weather?q=Jaipur&appid=11e5f1069b6047ea041f096be8cd877e"  )   
         .on("data", (chunk) => {
            const objdata =JSON.parse(chunk);
            const arrData =[objdata];
            console.log(arrData[0].main.temp);
})
          .on("end",(err)=>{
            if (err) return console.log("connection closed due to errors",err);

            console.log("end");
          });
        }
    });
    server.listen(8000, "127.0.0.1");