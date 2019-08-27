const mongoose=require("mongoose");
//Connect to mongodb
var userSchema = new mongoose.Schema({
    username: {type: String},
    mood: {type: String},
    serverid: {type: String},
    _id: {type: Number}
  }, {collection: 'mood'});
  
  
  var User = mongoose.model('mood',userSchema);

const uri="Your MongoDB Server Uri";
mongoose.connect(uri, { useNewUrlParser: true })
.then((sc) => {
    console.log('MongoDB Connected...')
    let sun;

    async function lee(){
        await User.find({mood: "ok"}, function(err, data){
            if(err){
                console.log(err);
                return
            }
        
            if(data.length == 0) {
                console.log("No record found")
                console.log(data);
                return
            }
            sun=data[0];
            console.log(data[0]);
        })
        console.log("zsdadasdasddaaaa");
        console.log(sun);
        return sun;
    }
    lee().then((data)=>console.log("wtf\n"+data.mood));
})

.catch((err)=> console.log(err))

// const MongoClient = require('mongodb').MongoClient;

// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//  // perform actions on the collection object
//   client.close();
// });
