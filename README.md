# LAV Blog - API

## Dependencies

- express
- jsonwebtoken
- knex
- pg
- cors

## Dev Dependencies

- @babel/cli
- @babel/core
- @babel/node
- @babel/preset-env
- nodemon

## Scripts

```json
"build": "babel index.js -d dist",
"start": "npm run build && node dist/index.js",
"dev": "nodemon --exec babel-node server.js"
```

- Build: `yarn build`
- Start build: `yarn start`
- Start Development: `yarn dev`

## Whose

```
--Lê Anh Vũ--
```
