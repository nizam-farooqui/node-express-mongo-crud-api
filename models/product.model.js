const mongoose=require('mongoose')

const ProductSchema=mongoose.Schema(
  
  {
    name:{
      type:String,
      required:[true,"enter The Product name"]
    },
    quantity:{
      type:Number,
      required:true,
      default:0
    },
    price:{
      type:Number,
      required:true,
      default:0
    },
    image:{
      type:String,
      required:false
    },
},
{
timestamps:true
}


)

const Product=mongoose.model("Product",ProductSchema)  

exports.Product=Product