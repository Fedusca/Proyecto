const express = require("express");
const app = express();
const PORT = 5000;
const userRouter = require("./routes/users")
const albumRouter = require("./routes/album")
const path = require("path");

app.use(cors());
app.use = ("/users", userRouter);
app.use = ("/album", albumRouter);

// mongoose.connect("mongodb+srv://fedusca:del1al9@cluster0.blldddk.mongodb.net/Proyecto?retryWrites=true&w=majority&appName=Cluster0")
// .then(function(db){
//     console.log("-- Conectado a MongoDB")
// })
// .catch(function(err){
//     console.log(err)
// });


app.listen(PORT,()=>{
    console.log("Iniciado server en puerto 5000");
})