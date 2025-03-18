const express=require('express')
const app=express();
// mongoose allow to acesss mongodb
const mongoose = require('mongoose');
const { Product } = require('./models/product.model');
const { productRouter } = require('./routes/prouct.route');

//Middleware
app.use(express.json()) // this is middleware allowed json in nodejs by default;
app.use(express.urlencoded({extended:false}))




// routes
app.use("/api/products",productRouter)




app.get('/',(req,res)=>{
  res.send('Hello I my Self Nizam');
})








mongoose.connect("mongodb+srv://farooquinizam600:LrA4jEN5z4e5bOz9@backenddb.2siez.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB")
.then(()=>{
  console.log("Db connect Sucessfully");
const port=3001;
app.listen(port,()=>{
console.log(`server is running on address at http://localhost:${port}`);
})
})
.catch(()=>{
  console.log('Failed');

})


