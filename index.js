const express = require('express')
const app = express()
const port = 3000
require('./db/db');
const appRouter = require("./routes/routes.app");
const userRouter = require("./routes/routes.user");
const { logRequest } = require('./middleware/middleware.commonController');

// middlewares
app.use(express.json());
app.use(logRequest);

//routes
app.use('/', appRouter);
app.use('/', userRouter);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})
