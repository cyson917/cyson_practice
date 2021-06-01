const express = require('express');

const app = express();

app.use('/public', express.static(`${__dirname}/public`))
app.use(express.static(`${__dirname}/public`))

app.get('/', (request, response) => {
    response.send('Hello express module')
})

app.get('/test/:a', (request, response) => {
    response.send(request.params.a);
})

app.listen(3000, () => {
    console.log('running');
})