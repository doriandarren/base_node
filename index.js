import express from 'express';

//Defnir puerto
const port = process.env.PORT || 4000;

const app = express();

//Definir la carpeta ñublica
app.use(express.static('public'));


app.get('/', (req, res) => {
    
    res.send('Hola mundo');
    // res.json({
    //     id: 1
    // });
})


app.listen(port, () => {
    console.log(`El servidor esta funcionando en el puerto ${port}`);
})