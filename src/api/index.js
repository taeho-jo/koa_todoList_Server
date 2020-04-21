const Router = require('koa-router');

const api = new Router();
const books = require('./books');
const auth = require('./auth');
const todos = require('./todos');

api.use('/books', books.routes());
api.use('/auth', auth.routes());
api.use('/todos', todos.routes());

module.exports = api;
