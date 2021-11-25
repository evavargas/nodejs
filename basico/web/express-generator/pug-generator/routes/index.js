var express = require('express');
var router = express.Router();

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
  }
]

router.get('/', (req, res) => {
  res.render('index', { titulo: 'pug', mensaje: 'Express generator + Pug', personas: personas });
});
module.exports = router;
