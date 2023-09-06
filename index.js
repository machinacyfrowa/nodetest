// tworzymy zmienną http zawierającą cały modułł do niskopoziomowej obsługi zapytań http
var http = require('http');

//dla serwera definiujemy funkcję createServer zawierającą anonimową funkcję z dwoma parametrami (req, res)
// req to zapytanie skierowane do serwera przez przeglądarke
// res to odesłane do przeglądarki dane
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('<h1>Hello World</h1>');
  res.end('Adres ip klienta: '+ req.socket.remoteAddress);
}).listen(8080);