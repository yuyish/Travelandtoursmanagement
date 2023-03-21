const express=require('express');
const app = express();
const port=80;
// console.log(__dirname);
app.get('/',(req,res)=>{
    res.send("Hello World");
    res.end();
});

app.listen(port);