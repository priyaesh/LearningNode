var http =require('http');
var dt =require('./myfirstModule')

http.createServer(function(request,response){
	response.writeHead(200, {'Content-Type': 'text/html'});
	response.write("The date and time are currently: " +   dt.myDatetime());
	response.write(request.url);
    response.end('Hello World! This is from w3school');
}).listen(3000);