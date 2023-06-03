require('dotenv').config();
const express = require('express')
const app = express()
const port = process.env.PORT || '4000';
const dataBase = process.env.DB_DATABASE;
const notes = require('./routes/noteRoute');
const sequelize = require('./database/db');
const Note = require('./models/Notes');
const cors = require('cors');
app.use(express.json());


// 👇️ configure CORS
app.use(cors());

// Inicio servidor
app.listen(port, () => {
  console.log(`Servidor BackEnd corriendo en el puerto: ${port} base de datos: ${dataBase}`)
// force:true hace un drop de todas las tablas
 //  sequelize.sync({ force: true}) NO USAR
  
  //  sequelize.sync({ alter: true })
  //  sequelize.sync({ force: false})

})

app.get('/index', (req, res) => {
    const data = {
        message: '¡Hola, raiz!',
      };
    
      // Enviar respuesta JSON
      res.json(data);
   
  })
  
app.use('/api/note/',notes); 

