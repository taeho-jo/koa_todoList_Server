const Router = require('koa-router');

const todos = new Router();

const todosCtrl = require('./todos.controller');

todos.post('/', todosCtrl.create);
todos.get('/', todosCtrl.getList);
todos.delete('/:id', todosCtrl.delete);
todos.get('/:id', todosCtrl.getDetail);
todos.patch('/:id', todosCtrl.update);

module.exports = todos;
