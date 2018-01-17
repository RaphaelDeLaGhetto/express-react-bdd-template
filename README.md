intelli-api
===========

This is an experimental, requirements driven, living proof of concept for the incipient Intelli Blockchain Token.

It is an Express API with a simple React client.

# Install

```
git clone https://github.com/TheMiningKing/intelli-api.git
cd intelli-api && npm install
```

# Development

Run server:

```
npm start
```

In development mode, the server listens on port `3001` (i.e., go to `http://localhost:3001` to view the app).

# Tests

`intelli-api` uses `jasmine` and `zombie` for testing:

```
npm test
```

# Production

## App

Clone:

```
git clone https://github.com/TheMiningKing/intelli-api.git
```

In the application directory:

```
cd intelli-api
NODE_ENV=production npm install
NODE_ENV=production npm run build
```

The _Dockerized_ production is meant to be deployed behind an `nginx-proxy`/`lets-encrypt` combo:

```
docker-compose -f docker-compose.prod.yml -d
```

# Licence

MIT

