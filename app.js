// importamos elementos
const express = require('express');

//ejecutamos express
const app = express();

//configuramos archivos estaticos
app.use(express.static('public'));

// solicitamos rutas

app.get("/", (req, res)=>{
    res.sendFile(__dirname + '/views/home.html')
});
app.get("/about", (req, res)=>{
    res.sendFile(__dirname + '/views/about.html')
});
app.get("/photogallery", (req, res)=>{
    res.sendFile(__dirname + '/views/photogallery.html')
});
app.get("/works", (req, res)=>{
    res.sendFile(__dirname + '/views/works.html')
});




///Prendemos el servidor

app.listen(3000, () => {
    console.log("Estoy corriendo en el puerto 3000");
});
    