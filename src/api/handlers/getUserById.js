const returnUserById = require('../../utils/returnUserById');

const { getErrorResponseBody, getSuccessResponseBody } = require('../../helpers');


async function getUserById(request, response) {
    const user = await returnUserById(request.params.id);

    if (user === null) {
        return response.status(404).json(getErrorResponseBody('User not found'))
    };

    return response.json(getSuccessResponseBody(user))
};


module.exports = getUserById