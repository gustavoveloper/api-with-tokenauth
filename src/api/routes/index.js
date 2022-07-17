const { Router } = require('express');

const authenticateWithToken = require('../middlewares/authenticateWithToken.auth');
const authorizeWithJwt = require('../middlewares/authorizeWithJwt.auth');

const getAdminJwt = require('../handlers/getAdminJwt');
const getAllUsers = require('../handlers/getAllUsers');


const router = Router();


router.get('/v1/admin-jwt', authenticateWithToken, getAdminJwt);
router.get('/v1/users', authorizeWithJwt, getAllUsers);


module.exports = router