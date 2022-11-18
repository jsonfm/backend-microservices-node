const express = require('express');
const user = require ("./components/user/network");
const config = require("../config");
const swaggerDocs = require("../swagger");
const app = express();

// middlewares
swaggerDocs(app);

// routers
app.use('/api/v1/user', user)


app.listen(config.PORT, () => {
    console.log(`Listening on port http://localhost:${config.PORT}`);
});