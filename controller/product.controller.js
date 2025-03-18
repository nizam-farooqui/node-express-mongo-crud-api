const { Product } = require("../models/product.model")




const getProduct= async(req,res)=>{
  try {
    const products=await Product.find({}) // db me data layega 
    res.status(200).json(products)
  } catch (error) {
    res.status(500).json({message:error.message})
  }
}

const getSpeificProduct=async(req,res)=>{
  try {
    const {id}=req.params
    const SpeicificProducts=await Product.findById(id)
    res.status(200).json(SpeicificProducts)// ye user ko res bhj rhe h 
  } catch (error) {
    res.status(500).json({message:error.message})
  }

}


const createProduct=async(req,res)=>{ // yaha async await isliye lagaya qki user ka data aane me time lagega
  // console.log(req.body);
  // res.send(req.body)

  try {
    const product=await Product.create(req.body)// jo bhi user ka data aya h usko products k ander daal do
    //user ka data ayya hogga usko Product me daal kr fir sidhe db tak bhj degga 
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({message:error.message})
  }
}


const updateProduct=async(req,res)=>{
  try {
    const {id}=req.params;
    const product=await Product.findByIdAndUpdate(id,req.body)// jo user ki request uske basis pr prouct update kro

    if(!product){
      res.status(404).json({message:"product is not found"})
    }

    const UpdateProduct=await Product.findById(id);
    res.status(200).json(UpdateProduct)
  } catch (error) {
    res.status(500).json({message:error.message})
  }

}


const deletProduct=async(req,res)=>{

try {
  const {id}=req.params;
  const product=await Product.findByIdAndDelete(id,req.body)
if(!product){
  res.status(404).json({message:"Product not found "})
}
res.status(200).json({message:"Product Delete Sucessfully"});

} catch (error) {
  res.status(500).json({message:"Product Not found"});
}
}

exports.getProduct=getProduct
exports.getSpeificProduct=getSpeificProduct
exports.createProduct=createProduct
exports.updateProduct=updateProduct
exports.deletProduct=deletProduct