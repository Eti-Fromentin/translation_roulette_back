const randomRequestRouter = require('./randomRouter');

const setupRoutes = (app) => {
    app.use('/api/random', randomRequestRouter);
}

module.exports = { setupRoutes };