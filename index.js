var dt = require('./decision');
var app = require('express')();
var bodyParser = require('body-parser');

// parse application/json 
app.use(bodyParser.json())
// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: true }))

// define port
var port = process.env.PORT || 7777;

app.get('/decision/:temp/:humid/:pressure/:wind/:rain', function (req, res) {
    var temp = req.params.temp;
    var humid = req.params.humid;
    var pressure = req.params.pressure;
    var windspd = req.params.wind;
    var rain = req.params.rain;

    var result = {
        "temp" : temp 
    }
    res.json(dt.findAll(temp,humid,pressure,windspd,rain));

});

app.listen(port, function() {
    console.log('Starting node.js on port ' + port);
});