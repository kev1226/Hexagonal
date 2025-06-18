const helloUseCase = require('../../application/helloUseCase');

module.exports = (req, res) => {
  const message = helloUseCase.execute();
  res.send(`<h1>${message}</h1>`);
};
