// ROOT OF CONTROLLER LAYER

//////////////////////////////////////////////////
//* IMPORT ZONE
express = require('express');
dotenv = require('dotenv');

var app = express();
dotenv.config();

// req.body 사용 위해
app.use(express.json());
app.use(express.urlencoded({extended: true}));
//////////////////////////////////////////////////
//* EXAMPLE: SUCCESSED CODE
app.get('/get', function(req, res){
    res.send({hello: 'hello world'});
})

app.post('/post', function(req, res){
    console.log(req.body);
    res.send(req.body);
})
//////////////////////////////////////////////////
//* LISTENING ZONE
app.listen(process.env.PORT, ()=>{
    console.log('Example app: listening at URL.%d', process.env.PORT);
})