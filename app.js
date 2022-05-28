// importamos elementos
const express = require('express');

//ejecutamos express
const app = express();

//configuramos archivos estaticos
app.use(express.static('public'));

// solicitamos

app.get("/home", (req, res, next)=>{
    
    res.sendFile(__dirname + "/views/home.html");
});




///Prendemos el servidor

app.listen(3000, () => {
    console.log("Estoy corriendo en el puerto 3000");
});
    