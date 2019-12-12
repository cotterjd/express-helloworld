const log = console.log
, app = require('express')()
, bodyParser = require('body-parser')
;

app.set('port', (process.env.PORT || 3000))
app.use(bodyParser.json()) // to be able to receive json in requests

app.get('/', function (req, res) {
  res.send('hello world')
})

app.listen(app.get('port'), function () {
  console.log('Node app is running on port', app.get('port'))
})
