const apiRouter = require("express").Router();
const topicsRouter = require("./topics-router");
const usersRouter = require("./users-router.js");

apiRouter.use("/topics", topicsRouter);
apiRouter.use("/users", usersRouter);
// apiRouter.use("/*");

module.exports = apiRouter;