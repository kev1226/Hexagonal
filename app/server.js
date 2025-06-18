const express = require('express');
const app = express();
const helloController = require('../adapters/web/helloController');

app.get('/', helloController);

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => console.log(`Clean Architecture corriendo en el puerto ${PORT}`));
