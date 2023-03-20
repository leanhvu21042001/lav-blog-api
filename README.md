# LAV Blog - API

## Clone project

```sh
git clone https://github.com/leanhvu21042001/lav-blog-api.git
```

## Install dependencies and devDependencies

```sh
yarn
```

## Create Migrate

```sh
yarn migrate:make <name_migrate>
```

## Create Seed

```sh
yarn seed:make <name_seed>
```

## Run Migrations

```sh
yarn migrate:production
yarn migrate:development
yarn migrate:testing
```

## Run Un-Migrations

```sh
yarn unmigrate:production
yarn unmigrate:development
yarn unmigrate:testing
```

## Run Seeds

```sh
yarn seed:production
yarn seed:development
yarn seed:testing
```

## Build and run production in local

- Using [babeljs](https://babeljs.io/)

```sh
yarn production
```

## Run Development

```sh
yarn dev
```

## Database

- [Supabase](https://supabase.com/): **PostgreSQL**

## Deploy

- [Vercel](https://vercel.com/)

## Rules commit

- Prevent commit at branch dev and branch main
- Prevent push at branch main
- [Conventional commits](https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/config-conventional)

## JavaScript Style

- [Eslint](https://eslint.org/)

## Project structure

```sh
├── bin
│   └── www
├── src
│   ├── app.js
│   ├── config
│   ├── controllers
│   ├── dao
│   ├── db
│   │   ├── knex
│   │   │   ├── index.js
│   │   │   ├── migrations
│   │   │   └── seeds
│   │   └── knexfile.js
│   ├── helpers
│   ├── middleware
│   ├── modals
│   ├── public
│   ├── routes
│   ├── services
│   ├── test
│   ├── utils
│   └── validations
├── .env
└── vercel.json
├── package.json
```

## Author

```
--Lê Anh Vũ--
```
