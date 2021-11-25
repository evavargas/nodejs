const express = require('express');
const app = express();

let personas = [
    {
        id: 1,
        nombre: "Eva"
    },
    {
        id: 2,
        nombre: "Maria"
    },
    {
        id: 3,
        nombre: "Estrella"
    },
    {
        id: 4,
        nombre: "Carlos"
    },
    {
        id: 5,
        nombre: "Hugo"
    }
]

app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('template', { titulo: 'pug', mensaje: 'Utilizando pug | Pug', personas: personas });
});


app.listen(3000, () => {
    console.log('Corriendo en el puerto 3000')
});