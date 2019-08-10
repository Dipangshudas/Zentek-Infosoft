const path = require('path')
const express = require('express')
const app = express()

const port = process.env.PORT || 3000
//app.get('', (req, res)=>{
   // res.send('<h1>Hi my name is dave</h1>')
//})

const filename= path.join(__dirname,'../public')
const filename1= path.join(__dirname,'../public/blog.html')
const filename2= path.join(__dirname,'../public/contact.html')
const filename3= path.join(__dirname,'../public/about.html')
const filename4= path.join(__dirname,'../public/help.html')
console.log(filename)
app.use(express.static(filename))
app.use(express.static(filename1))
app.use(express.static(filename2))
app.use(express.static(filename3))
//app.get('/help', (req, res) =>{
//    res.send({
 //       Name: 'Prankit',
    //    Location: 'Jaipur'
 //   })
//})
//app.get('/source', (req, res) =>{
  //  res.send([{
    //    Name: 'Prankit',
      //  Location: 'Jaipur'
    //},{
//        Name: 'Dave',
//        Location: 'Jaipur'
//}])})
//app.get('/about', (req, res) =>{
  //  res.send("about me")
//})
app.listen(port, ()=>{
  console.log('Program running now on port 3000' + port)
})