const { Router } = require('express');

const authenticateWithToken = require('../middlewares/authenticateWithToken.auth');

const getAdminJwt = require('../handlers/getAdminJwt');


const router = Router();


router.get('/v1/admin-jwt', authenticateWithToken, getAdminJwt);


module.exports = router