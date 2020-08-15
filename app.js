const express = require('express');
const handlebars= require('express-handlebars');
const request = require('request');
const { json } = require('express');
const app = express();
const statesJson = require('./statesData.json')



//body parser config
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(__dirname+'/static'))

const APIKey = 'ebcb8f17';

//routes
app.get('/',(req,res)=>{
    res.render('index',{states: statesJson});
});

app.post('/request',(req,res)=>{
    var {state, city} = req.body;
    city = city.replace(/[ÀÁÂÃ]/g,"a");
    city = city.replace(/[àáâã]/g,"a");
    city = city.replace(/[ÈÉÊ]/g,"e");
    city = city.replace(/[èéê]/g,"e");
    city = city.replace(/[òóôõ]/g,"o");
    city = city.replace(/[ÒÓÔÕ]/g,"o");

    request(`https://api.hgbrasil.com/weather?key=${APIKey}&city_name=${city},${state}`,(err, response, body)=>{
      
    if(err){

        }else{
            const result = JSON.parse(body)
            console.log(result)
            res.render('index',{data: result,states: statesJson})
        }
    })
})

app.engine('handlebars', handlebars({defaultLayout: "main"}));
app.set('view engine','handlebars');


app.listen(8080);