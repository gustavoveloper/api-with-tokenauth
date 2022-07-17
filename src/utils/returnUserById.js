const returnAllUsers = require('./returnAllUsers');


async function returnUserById(id) {
    let result = null;
    const users = await returnAllUsers();

    for (const user of users) {
        if (user.id === id) result = user
    };

    return result
};


module.exports = returnUserById