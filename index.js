const log = console.log
, app = require('express')()
;

app.set('port', (process.env.PORT || 3000))

app.get('/', function (req, res) {
  res.send('hello world')
})

app.listen(app.get('port'), function () {
  console.log('Node app is running on port', app.get('port'))
})
