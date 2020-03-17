# koa-agile-web-server
Build, run &amp; test Koa Agile Web Server &amp; test endpoints easily with Postman.

1.	yarn (install packages and run project)
2.	Koa (koa-router & koa-body packages)
3.	Javascript (package.json)
4.	Postman (test locally)

Github Repo: https://github.com/go4lab/koa-agile-web-server

*** CODE ***

open cmd
`INICIO + R`
write 'cmd' and hit 'Enter'

create project folder
`mkdir koa-agile-web-server`

init node project
`yarn init -y`

add koa package
`yarn add koa`

add koa-router package
`yarn add koa-router`

add koa-body package
`yarn add koa-body`

create index file
`copy con index.js`
```
    'use strict';
```
close 'cmd' file editing
`CTRL + Z`

open IDE & edit code 
`code index.js`

edit file or copy `index.js`
    (Github Repo: https://github.com/go4lab/koa-agile-web-server)

edit package.js
`
    "scripts": {
        "start": "node index.js"
    },
`

run node project
`yarn start`

open PostMan
try these routes and make sure you use GET method
    `http://localhost:3000/songs`
    `http://localhost:3000/songs/KoRn`
    `http://localhost:3000/songs/KORN`
    `http://localhost:3000/songs/korn`

*** CODE ***

Jose Gomez dev