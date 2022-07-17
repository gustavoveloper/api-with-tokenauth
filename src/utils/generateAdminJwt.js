const jwt = require('jsonwebtoken');

const { v4: uuid } = require('uuid');

const { jwtSignatureSecretKey } = require('../config');


function generateAdminJwt() {
    const jwtOptions = { expiresIn: '5m' };

    const jwtPayload = { jti: uuid(), adm: true };

    return jwt.sign(jwtPayload, jwtSignatureSecretKey, jwtOptions)
};


module.exports = generateAdminJwt