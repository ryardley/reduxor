# Reduxor
__A React Router ready, Redux & React Isomorphic starting template for your sanity.__

Isomorphic React starting package cause the rest of them suck and I wanted to make my own with the latest packages.

I see a whole lot of webpack react and flux projects that are a total sack of spaghetti. They mix concerns they add unnecessary dependencies, they use ugly global flags and 6 different types of configuration as they copy and paste code from starter after starter.

My goal here is to write a sane isomorphic starter with minimal complexity and sane technical decisions that should not cause you headaches as you understand the cruft that adding library after library does to your codebase as your app grows.

### Technology
* Redux v2.0
* React v0.13.0
* React Router v1.0.0-rc1
* Express v4.13.3
* Webpack v1.12.1
* Babel v5.8.23

### Primary Goals
* Simple, transparent, sane, easily grockable code base.
* Latest default package versions on npm.
* Minimal complexity.
* Minimal dependencies.
* Isomorphicize as much as practical as transparently as possible.
* Use env vars for configuration so it plays nicely as a 12 Factor app. http://12factor.net/
* Avoid unnecessary global dependencies especially for deployment. _(ie. favour using local .bin, avoid gulp)_
* Everything should be the same version of ES whatever.

### TODO
- [x] Refactor to Redux
- [x] Isomorphic Rendering with a service
- [x] Encapsulate Hydration using [Drator](https://www.npmjs.com/package/drator)
- [x] Implement [Redux actions](https://github.com/acdlite/redux-actions)
- [x] Implement [Redux promise](https://github.com/acdlite/redux-promise)
- [x] Service Proxying with [Nector](http://github.com/ryardley/nector)
- [x] Unit tests example
- [x] Feature tests example
- [ ] Implement promise based actions. [Something like this](https://github.com/erikras/react-redux-universal-hot-example/blob/master/src/redux/middleware/clientMiddleware.js)
- [ ] Remove mock express from client
- [ ] Refactor for modularity.
- [ ] Separate out views from components.
- [ ] Service Authentication with [Passport](https://github.com/jaredhanson/passport) and [Nector](http://github.com/ryardley/nector)
- [ ] Functionally based authorization within Nector
- [ ] React Zurb Foundation or Bootstrap
- [ ] Login Page with Authenticated resources.
- [ ] Seed data script.
- [ ] React Hot Loading.
- [ ] Redux Dev Tools.
- [ ] Minification.
- [ ] Assets / Gzip.
- [ ] Cache server rendered pages in memory.

### Future goals
- [ ] CSS Modules.
- [ ] Upgrade to React v0.14

- [ ] Simple basic deployment script to SSH into a server and run a git pull.

## To setup

Install dependencies
```bash
$ npm i
```

## To run
The start in development mode

```bash
$ npm start
```

Then shoot over to [http://localhost:3000/](http://localhost:3000/) to be amazed at the awesomeness.

## To run in production
The start in production mode

```bash
# First build the source
$ npm run build

# Then start with NODE_ENV set to production
$ NODE_ENV=production npm start
```

## Environment vars

To customise your environment create a .env file to provide some simple environment information.

```bash
# .env
PORT=3181
ASSET_HOST=http://localhost:8080
```

Here we are setting the development port to run on 3181 and the location of the transpiled assets to be http://localhost:8080 (webpack-dev-server defaults)
