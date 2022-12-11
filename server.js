/* function requireHTTPS(req, res, next) {
  // The 'x-forwarded-proto' check is for Heroku
  if (!req.secure && req.get('x-forwarded-proto') !== 'https') {
      return res.redirect('https://' + req.get('host') + req.url);
  }
  next();
}
const express = require('express');
const app = express();
app.use(requireHTTPS);
app.use(express.static('./dist/reusability'));
app.get('/*', function(req, res) {
  res.sendFile('index.html', {root: 'dist/reusability/'}
);
});
app.listen(process.env.PORT || 8080); */


//Install express server
const express = require('express');
const path = require('path');
const port = process.env.PORT || 8080;
const app = express();

app.use(express.static(__dirname));
app.use(express.static(__dirname + '/dist/reusability'))

app.get('/ping', function (req, res)
{
 	return res.send('pong');
});
app.get('/*', function(req,res) {

res.sendFile(path.join(__dirname+'/dist/reusability/index.html'));
});

app.listen(port, function ()
{
	 console.info('Angular Server App listening on port ' + port);
});
