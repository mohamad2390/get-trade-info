const express = require('express');
const cors = require('cors');
const app = express();
const http = require('http').Server(app);
const clr = require('colors');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');
const options = require('./swagger')

const specs = swaggerJsdoc(options);
const port_number = 5000;

app.use(cors());
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
app.get('/callback', function (req, res) {
    res.sendFile(path.join(__dirname, '/views/callback.html'));
});


http.listen(port_number, function () {
    console.log(clr.green('server is runnig on *' + port_number));
});

app.get('/download', function (req, res) {
    const file = `${__dirname}/internal_server_info.txt`;
    res.download(file);
});

const baseRout = require('./routes/router');

app.use('/api', baseRout);

module.exports = app;