const extra = require('./extra');

extra.saludar();

let curso = "node";
curso = "node.js";
curso = "node.js tutos!!";

debugger;
console.log(curso);

x = ()=>{
    debugger;
    return 1 + 25;
}

console.log(x());
//node inspect app.js
//repl: read eval print loop <- entrar al debug para testear 
//n : next line
//c: que compile hasta el final o hasta la linea 'debugger;'
//list(4): listar  lineas de código del archivo
//utilizar nodemon para autoreload
//otra opcion: node --inspect-brk app.js / nodemon --inspect-brk app.js
//chrome://inspect/#devices
