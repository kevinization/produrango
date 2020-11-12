const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();
let router = express.Router();

const { mongoose } = require('./database');

// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors({origin: 'http://localhost:4200'}));

let aUser = ("./models/activo");

// Routes
app.use('/api/usuarios', require('./routes/usuario.routes'));
//app.use('/api/usuarios/activos', require('./routes/activos.routes'));
app.use('/api/publicaciones', require('./routes/publicacion.routes'));
app.use('/api/bajas', require('./routes/baja.routes'));
app.use('/api/comentarios', require('./routes/comentario.routes'));


router.post('/api/usuarios/activos', function(req, res) {
    var data = req.body.authT;
    console.log(data);
});


// Starting the server
app.listen(app.get('port'),() => {
    console.log('Server on port', app.get('port'));
});