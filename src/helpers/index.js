const helpers = {
    getErrorResponseBody: error => ({ error, data: null }),

    getSuccessResponseBody: data => ({ error: null, data })
};


module.exports = helpers