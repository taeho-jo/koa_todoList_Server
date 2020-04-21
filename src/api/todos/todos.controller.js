const DailyTodo = require('../../model/todo');
const Joi = require('joi');
const { Types: { ObjectId } } = require('mongoose');

exports.create = async ctx => {
  const {
    username,
    title,
    desc,
    tags,
    done,
    createAt,
    expired
  } = ctx.request.body;

  const todo = new DailyTodo({
    username,
    title,
    desc,
    tags,
    done,
    createAt,
    expired
  });

  try {
    await todo.save();
  } catch (e) {
    return ctx.throw(500, e);
  }

  ctx.body = todo;
};

exports.getList = async ctx => {
  let todo;

  try {
    todo = await DailyTodo.find().exec();
  } catch (e) {
    return ctx.throw(500, e)
  }
  ctx.body = todo;
};

exports.delete = async ctx => {
  const { id } = ctx.params;

  try {
    await DailyTodo.findByIdAndRemove(id).exec();
  } catch (e) {
    if(e.name === 'CastError') {
      ctx.status = 400;
      return;
    }
  }
    ctx.status = 204;
};

exports.getDetail = async ctx => {
  const { id } = ctx.params;
  let todo;

  try {
    todo = await DailyTodo.findById(id).exec();
  } catch (e) {
      ctx.status = 400;
      ctx.body = {message: '데이터가 없습니'}
  }
  ctx.body = todo;
};

exports.update = async  ctx => {
  const { id } = ctx.params;

  if(!ObjectId.isValid(id)) {
    ctx.status = 400;
    return;
  }

  let todo;
  try {
    todo = await DailyTodo.findByIdAndUpdate(id, ctx.request.body)
  } catch(e) {
    return ctx.throw(500, e);
  }
  ctx.body = todo;
};
