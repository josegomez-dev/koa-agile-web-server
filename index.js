'use strict';

const Koa = require('Koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();

const songs = [
    { name: 'Aerials', author: 'SOAD' },
    { name: 'Daddy', author: 'KoRn' },
    { name: 'Blind', author: 'KoRn' }
];

router.get('/songs/', ctx => {
    ctx.body = songs;
});

router.get('/songs/:author', ctx => {
    const str = ctx.params.author.toLowerCase();
    ctx.body = songs.filter(user => user.author.toLowerCase() === str);
});

app
    .use(require('koa-body')())
    .use(router.allowedMethods())
    .use(router.routes());
  
app.listen(3000);
