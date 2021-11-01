'use strict';

module.exports.helloWorld = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Hello world',
    }),
  };
};
