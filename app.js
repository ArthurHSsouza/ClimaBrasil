const express = require('express');
const request = require('request');
const app = express();

//ejs
app.set('view engine','ejs')

//body parser config
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(__dirname+'/static'))

const APIKey = '7aa01c01';

//routes
app.get('/',(req,res)=>{
    res.render('index');
});

app.post('/request',(req,res)=>{
    let {state, city} = req.body;
    let originalCity = city;
    city = city.replace(/[ÀÁÂÃ]/g,"a");
    city = city.replace(/[àáâã]/g,"a");
    city = city.replace(/[ÈÉÊ]/g,"e");
    city = city.replace(/[èéê]/g,"e");
    city = city.replace(/[òóôõ]/g,"o");
    city = city.replace(/[ÒÓÔÕ]/g,"o");

    request(`https://api.hgbrasil.com/weather?key=${APIKey}&city_name=${city},${state}`,(err, response, body)=>{
      
    if(err){
        console.log(err)
        }else{
            const data = JSON.parse(body)
            console.log(data)
            res.render('index',{data: data.results, city: originalCity})
            
        }
    })
})

app.listen(8080);