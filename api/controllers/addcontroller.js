import Hwmodel from "../models/hwmodel.js";


export const addhw=async(req,res)=>{

   const {subject,person,returned}=await req.body;
   res.json({message:"done"})
   try{ 
   const newwork= new Hwmodel({
        subject,
        person,
        returned
    })
   const wait= await newwork.save()
}catch(error){
    console.log(error);
}



}