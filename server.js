const express = require('express')
const app = express()
const path=require('path')

const time=(req,res,next)=>{
    var d= new Date() ;
    var days = d.getDay();
    var hour = d.getHours()
    if (days>=1 && days<= 6 &&  hour>=9 && hour <= 17){
         next()
    } else {
      res.send(
        "<h1>The web application is only available in working time (Monday to Friday,  from 9 to 17) </h1>"
      );  }}



app.use(time,express.static(path.join(__dirname,"public")))

app.listen('4000')