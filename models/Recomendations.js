
const {Schema, model} =require ('mongoose')

const recomendationSchema= new Schema({
    userId:{
        type:Schema.Types.ObjectId,
        ref:'User',
    },
    title:String,
    estimate:Number,
    actual:Number,
    surprise:Number,
    crypto:{
        type:String,
        enum:["BTC", "LTC", "ETH"]
    },
    recomendation:{
        type:String,
        enum:["Buy", "Sell", "Hold"]
    },
    
},{
    timestamps:true
});

module.exports=model ('Recomendation', recomendationSchema)