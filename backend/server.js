import express from "express";
import mongoose from "mongoose";
import cors from "cors";
const app = express();
app.use(express.json());
app.use(cors());

//DB CONNECTION
mongoose.connect ("mongodb+srv://shaaleni:151299Sh@Portfolio.8abnban.mongodb.net/Portfolio?retryWrites=true&w=majority",{
    useNewUrlParser:true,
    useUnifiedTopology:true
},(err) => {
    if(!err){
        console.log("db connected");
    }
    else{
        console.log("error");
    }
})

//SCHEMA
const mySchema = {
    name:String,
    designation:String,
    id:Number
}

const monmodel = mongoose.model("profile",mySchema);

//POST ROUTE

app.post("/add",async(req,res)=>{
    console.log("inside post");

    const data = new monmodel ({
        name:req.body.name,
        designation:req.body.designation,
        id:req.body.id

    })

    const val = await data.save();
    res.json(val);
})

//fetch by id
app.get("/get/:id",function(req,res){
          getid=req.params.id
          monmodel.find(({id:getid}),function(err,val){
            if(err){
                res.send("err");
            }
            else{
                if(val.length==0)
                {
                    console.log("data doesn't exist");
                }
                else{
                    res.send(val);
                }
            }
          
          })
})

//FETCH ALL

app.get("/get",(req,res)=>{
    monmodel.find((err,val)=>{
        if(err){
            console.log("err in getting the data");
        }
        else{
            res.json(val);
        }
    })
})

//UPDATE 
app.put("/update/:id",(req,res)=>{
    let updid = req.params.id;
    let updname = req.body.name;
    let upddesig = req.body.designation;

    monmodel.findOneAndUpdate({id:updid},{$set:{name:updname,designation:upddesig}},{new:true},(err,data)=>{
        if(err){
            res.send("ERROR");
        }
        else{
            if(data=="null"){
               res.send("Nothing Found"); 
            }
            else{
                res.send(data);
            }
        }
    })
})

//DELETE
app.delete("/del/:id",(req,res)=>{
    let delid = req.params.id;

    monmodel.findOneAndDelete({id:delid},(err,data)=>{
        if(err){
            res.send("ERROR");
        }
        else{
            if(data==null){
               res.send("the id isn't available in DB"); 
            }
            else{
                res.send("deleted Successfully");
            }
        }
    })
})


app.listen(8000,()=>{
    console.log("On port 8000");
})
