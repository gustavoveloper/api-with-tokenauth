const { getErrorResponseBody } = require('../../helpers');

const { adminSecretKey } = require('../../config');


async function authenticateWithToken(request, response, next) {
    const token = request.headers['x-access-token'];

    if (!token) {
        return response.status(401).json(getErrorResponseBody('Token is required in "X-Access-Token" HTTP header'))
    };

    if (token !== adminSecretKey) {
        return response.status(401).json(getErrorResponseBody('Invalid access token'))
    };

    return next()
};


module.exports = authenticateWithToken