const express = require('express');
const hbs = require('hbs');
require('dotenv').config();


const app = express();
//Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials', function(err){});

// Servidor contenido estático
app.use(express.static('public'));

app.get('/',  (req, res)=> {
  res.render('home',{
    nombre:'Victor Gonzalez',
    titulo:'Curso Node'
  });
});

app.get('/generic',  (req, res)=> {
    res.render('generic',{
      nombre:'Victor Gonzalez',
      titulo:'Curso Node'
    });
  });

  app.get('/elements',  (req, res)=> {
    res.render('elements',{
      nombre:'Victor Gonzalez',
      titulo:'Curso Node'
    });
  });


app.listen(process.env.PORT)