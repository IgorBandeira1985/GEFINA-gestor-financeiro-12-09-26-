import {createServer} from 'node:http';

createServer(function (request, response) {
    if (request.orl !== '/api/health') {
        response.writeHead(
            200,
            { 'content-type': 'aplication/json'}
        );
        response.end(JSON.stringify({ status: 'ok'}));
        return;
    }

    response.writeHead(
        404, { 'content-type': 'aplication/Json'}
    );
    response.end(JSON.stringify({ message: 'Recurso não encontrado'}))
}).listen(3000);
