let express = require('express');
let app = express();

app.set('port', 300);
app.use('/', express.static('.'));

app.all('/*', function (req, res, next) {
  res.sendFile('index.html', {root: __dirname});
});

app.listen(app.get('port'), function () {
  console.log(`craigfus.co local express server running on port ${app.get('port')}`);
});
