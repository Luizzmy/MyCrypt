const {Schema, model} =require ('mongoose')

const postSchema= new Schema({
    userId:{
        type:Schema.Types.ObjectId,
        ref:'User',
    },
    title:String,
    summary:String,
    comment:String,
    image:String,


    
},{
    timestamps:true
});

module.exports=model ('Post', postSchema)