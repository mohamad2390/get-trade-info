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

const fs = require('fs');

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

    fs.readFile(`${__dirname}/internal_server_info.txt`, 'utf8', (err, data) => {
        if (err) {
        //   console.error(err);
          return;
        }
        fs.readFile(`${__dirname}/internal_server_info2.txt`, 'utf8', (err2, data2) => {
            if (err) {
              console.error(err2);
              res.status(402).send('err').end();
              return;
            }
            // console.log(typeof(data2));
            if (data == data2){
                res.status(402).send('').end();
                return;
            }else{
                const file = `${__dirname}/internal_server_info.txt`;
                res.download(file);
                fs.writeFile(`${__dirname}/internal_server_info2.txt`, data, function(){console.log('done')})
            }
          });
      });
});

const baseRout = require('./routes/router');

app.use('/api', baseRout);

module.exports = app;