import express from 'express';
import router from './src/routes/index.js'

//Defnir puerto
const port = process.env.PORT || 4000;

const app = express();

//Definir la carpeta ñublica
app.use(express.static('public'));


// Router
app.use('/', router);



app.listen(port, () => {
    console.log(`El servidor esta funcionando en el puerto ${port}`);
})