const jwt = require('jsonwebtoken');

const { getErrorResponseBody } = require('../../helpers');

const { jwtSignatureSecretKey } = require('../../config');


async function authorizeWithJwt(request, response, next) {
    let token = request.headers['x-access-jwt'];

    if (!token) {
        return response.status(401).json(getErrorResponseBody('Token is required in "X-Access-JWT" HTTP header'))
    };

    try {
        token = jwt.verify(token, jwtSignatureSecretKey)
    } catch {
        return response.status(401).json(getErrorResponseBody('Invalid or expired token'))
    };

    if (token.adm !== true) {
        return response.status(403).json(getErrorResponseBody('You need admin privileges'))
    };

    return next()
};


module.exports = authorizeWithJwt