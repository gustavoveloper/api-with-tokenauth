const { getSuccessResponseBody } = require('../../helpers');

const generateAdminJwt = require('../../utils/generateAdminJwt');


async function getAdminJwt(request, response) {
    const adminJwt = generateAdminJwt();

    return response.json(getSuccessResponseBody(adminJwt))
};


module.exports = getAdminJwt