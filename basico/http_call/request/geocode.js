const request = require('request');
const argv = require('yargs').argv;

let key='AIzaSyC07guZ2UCy1fNhzwIK07YWzotfGkJIyVA'
let direccion = argv.direccion;
let url = `https://maps.googleapis.com/maps/api/geocode/json?address=${direccion}&key=${key}`;

request({
    url: url,
    json: true
},(error, response, body)=>{
    //console.log(body)  
    if(error){
        console.log('Servicio no disponible');
    }else if(body.status === 'ZERO_RESULTS'){
        console.log('No hay datos a mostrar');
    }else if(body.status === 'OK'){
        console.log(JSON.stringify(body, undefined, 1));
        console.log(JSON.stringify(`Ubicación: ${body.results[0].formatted_address}`));
        console.log(JSON.stringify(`Latitud: ${body.results[0].geometry.location.lat}`));
        console.log(JSON.stringify(`Longitud: ${body.results[0].geometry.location.lng}`));
    }  
});