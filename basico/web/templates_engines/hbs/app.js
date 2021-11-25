const express = require('express');
const app = express();

let personas = [
    {
        id: 1,
        nombre: "Carlos"
    },
    {
        id: 2,
        nombre: "Hugo"
    },
    {
        id: 3,
        nombre: "Eva"
    },
    {
        id: 4,
        nombre: "Maria"
    },
    {
        id: 5,
        nombre: "Estrella"
    },
    
]

app.set('view engine', 'hbs')

app.get('/', (req, res) => {
    res.render(
        'template',
        { titulo: 'Handlebars', mensaje: 'Utilizando HBS | handlebars', personas: personas })
});

app.listen(3000, () => {
    console.log('Corriendo en el puerto 3000')
});