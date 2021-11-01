'use strict';

module.exports.helloWorld = async (event) => {
  let message = 'Hello world';
  const name = event.queryStringParameters && event.queryStringParameters.name;

  if (name != null) {
    message = `Hello ${name}`;
  }

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: message,
    }),
  };
};
