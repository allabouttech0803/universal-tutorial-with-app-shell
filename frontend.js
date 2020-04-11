const express = require('express');
const path = require('path');

const app = express();
const distFolder = path.join(__dirname, '/dist/universal-tutorial-with-app-shell/browser');
app.use(express.static(distFolder));
app.get('/*', function (req, res) {
  res.sendFile(path.join(distFolder, 'index.html'));
});

app.listen(process.env.PORT || 8080);