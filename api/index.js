const express = require('express');
const user = require ("./components/user/network");
const config = require("../config");
const app = express();


// routers
app.use('/api/user', user)


app.listen(config.PORT, () => {
    console.log(`Listening on port ${config.PORT}`);
});