module.exports = {
    NotFoundMiddleware: require("./not-found.middleware"),
    ErrorMiddleware: require("./error.middleware"),
    AuthMiddleware: require("./auth.middleware.js"),
    ParseInteMiddleware: require('./parse-int.middleware'),
    CacheMiddleware: require('./cache.middleware')
};