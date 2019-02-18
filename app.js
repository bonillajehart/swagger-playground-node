const express = require('express');
const app  = express();
const body_parser = require('body-parser');

const swagger_ui = require('swagger-ui-express');
const swagger_document = require('./swagger-files/swagger.json');

app.use(body_parser.json());

app.use('/api-docs', swagger_ui.serve, swagger_ui.setup(swagger_document));

app.get('/', (request, respond) => {
	respond.send('Hello, world');
});

app.listen(8888, () => {
	console.log('Listening to 8888');
});