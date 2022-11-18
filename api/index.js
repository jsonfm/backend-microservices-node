const express = require('express');
const user = require ("./components/user/network");
const auth = require('./components/auth/network');
const config = require("../config");
const swaggerDocs = require("../swagger");
const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
swaggerDocs(app);

// routers
app.use('/api/v1/user', user)
app.use('/api/v1/auth', auth);

app.listen(config.PORT, () => {
    console.log(`Listening on port http://localhost:${config.PORT}`);
});