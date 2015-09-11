
# Reactomorph

Isomorphic React starting package cause the rest of them suck and I wanted to make my own.

### Primary Goals
* Pay careful attention to create a clearly defined easy to follow file structure.
* Isomorphicize as much as practical.
* Plays nicely as a 12 Factor app. http://12factor.net/
* Avoid unnecessary global dependencies especially for deployment. _(ie. favour using local .bin, avoid gulp)_
* Should be low volume production ready launchable via npm start for upstart.
* Everything should be consistantly babeled.

### TODO
- [ ] Execute all latent dispatch requests before server rendering.
- [ ] Incorporate [fetchr](https://github.com/yahoo/fetchr).
- [ ] Minification.
- [ ] Assets / Gzip.
- [ ] CSS Modules.
- [ ] Cache server rendered pages in memory.

### Future goals
- [ ] Unit tests
- [ ] Feature tests
- [ ] React Hot Loading
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
