const helloService = require('../domain/helloService');

exports.execute = () => {
  return helloService.getHello();
};
