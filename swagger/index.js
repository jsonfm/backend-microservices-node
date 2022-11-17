const expressJSDocSwagger = require('express-jsdoc-swagger');
const options = require('./options');


const swaggerDocs = (app) => {
    expressJSDocSwagger(app)(options);
}

module.exports = swaggerDocs;