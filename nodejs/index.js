console.log("Hello")

var figlet = require("figlet");

figlet("Hello World!!", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});


const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000)


app.get('/user/:id', (req, res) => {
    const q = req.params
    console.log(q)
})

app.get('/sound/:name', (req,res) => {
    const { name } = req.params
    
    console.log(name)

    if(name == 'dog'){
        res.json({'sound': '멍멍'})
    }else if (name == 'cat'){
        res.json({'sound': '야옹'})
    }else {
        res.json({'sound': '알수없음'})
    }
        
    

    

})