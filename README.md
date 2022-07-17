# Project documentation
This is a simple webservice to manage users that has root access and uses TokenAuth as authentication method and JWTs as authorization tokens.

## How to start
Define the following environment variables (you can use the ```.env.sample``` file):

- ```HOST``` (```localhost```, by default): The hostname of API server.
- ```PORT``` (```8080```, by default): The TCP port where API server listens.
- ```DATA_FILE_PATH```: Absolute path of JSON file where user data are stored.
- ```API_ADMIN_SECRET_KEY```: Root-access secret key.
- ```JWT_SIGNATURE_SECRET_KEY```: Secret key used to sign JWTs.

Variables that have default values do not need to be defined.

After these configurations, install project dependencies and run the ```start``` _npm_ script. Then you should be able to see something like:

```
Server listening at tcp://<server-host>:<server-port>...
```

## Response format
**This API is JSON**. It means that all server-sent responses have JSON format. More specifically, they have the following JSON format:

```
{ "error": <error-message>, "data": <response-data> }
```

## How to use the API
| HTTP Method | Endpoint | Description | Requires authentication/authorization |
| ----------- | -------- | ----------- | ------------------------------------- |
| GET | /v1/admin-jwt | Get new root-access JWT. | true |
| GET | /v1/users | Get all registered users. | true |
| GET | /v1/users/:id | Get an registered user by ID. | true |
