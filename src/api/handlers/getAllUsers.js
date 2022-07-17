const returnAllUsers = require('../../utils/returnAllUsers');

const { getSuccessResponseBody } = require('../../helpers');


async function getAllUsers(request, response) {
    const users = await returnAllUsers();

    return response.json(getSuccessResponseBody(users))
};


module.exports = getAllUsers