# LAV Blog - API

## Dependencies

```json
{
  "dependencies": {
    "cookie-parser": "^1.4.6",
    "cors": "^2.8.5",
    "debug": "^4.3.4",
    "express": "^4.18.2",
    "http-errors": "^2.0.0",
    "jsonwebtoken": "^9.0.0",
    "knex": "^2.4.2",
    "morgan": "^1.10.0",
    "pg": "^8.9.0"
  }
}
```

## Dev Dependencies

```json

 "devDependencies": {
    "@babel/cli": "^7.21.0",
    "@babel/core": "^7.21.0",
    "@babel/node": "^7.20.7",
    "@babel/preset-env": "^7.20.2",
    "nodemon": "^2.0.21"
  }

```

## Scripts

```json
{
  "scripts": {
    "clean": "rm -rf build && mkdir build",
    "build-babel": "babel ./src -d ./build/src",
    "build": "npm run clean && npm run build-babel",
    "production": "npm run build && node ./build/src/www.js",
    "dev": "nodemon --exec ./node_modules/.bin/babel-node ./src/www.js",
    "lint": "eslint \"{src,test}/**/*{.js,.ts}\"",
    "lint:fix": "eslint \"{src,test}/**/*{.js,.ts}\" --fix"
  }
}
```

- Build: `yarn build`
- Start build: `yarn production`
- Start Development: `yarn dev`

## Whose

```
--Lê Anh Vũ--
```
