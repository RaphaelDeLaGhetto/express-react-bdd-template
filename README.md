express-react-bdd-template
==========================

Template Express/React app with with Jasmine and Zombie BDD testing built in.

# Install

```
git clone https://github.com/RaphaelDeLaGhetto/express-react-bdd-template.git
cd express-react-bdd-template && npm install
```

# Development

Run server:

```
npm start
```

In development mode, the server listens on port `3001` (i.e., go to `http://localhost:3001` to view the app).

# Tests

`express-react-bdd-template` uses `jasmine` and `zombie` for testing:

```
npm test
```

# Production

## App

Clone:

```
git clone https://github.com/RaphaelDeLaGhetto/express-react-bdd-template.git
```

In the application directory:

```
cd express-react-bdd-template
NODE_ENV=production npm install
NODE_ENV=production npm run build
```

The _Dockerized_ production is meant to be deployed behind an `nginx-proxy`/`lets-encrypt` combo:

```
docker-compose -f docker-compose.prod.yml up -d
```

# Licence

MIT

