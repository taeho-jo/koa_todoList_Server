require('dotenv').config();

const Koa = require('koa');
const Router = require('koa-router');
const Cors = require('koa-cors');


const app = new Koa();
const router = new Router();
const api = require('./api');

const mongoose = require('mongoose');
const bodyParser = require('koa-bodyparser');



mongoose.Promise = global.Promise;

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true }).then(res => {
  console.log('성공했습니다')
}).catch(e => {
  console.error('실패요', e)
});

const port = process.env.PORT || 4000;

app.use(bodyParser());
app.use(Cors());

router.use('/api', api.routes());

app.use(router.routes()).use(router.allowedMethods());

app.listen(port, () => {
  console.log('실행되었도다')
});


