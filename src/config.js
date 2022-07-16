require('dotenv').config();


module.exports = {
    server: {
        host: process.env.HOST || 'localhost',
        port: Number.parseInt(process.env.PORT) || 8080
    },
    dataFilePath: process.env.DATA_FILE_PATH,
    adminSecretKey: process.env.API_ADMIN_SECRET_KEY,
    jwtSignatureSecretKey: process.env.JWT_SIGNATURE_SECRET_KEY
}