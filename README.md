# Reactomorph

Isomorphic React starting package cause the rest of them suck and I wanted to make my own. This very basic right now and is a work in progress. You might want to look at it for inspiration but there are other more developed solutions.

### Primary Goals
* Clearly defined easy to follow file structure.
* Isomorphicize as much as practical.
* Plays nicely as a 12 Factor app. http://12factor.net/
* Avoid unnecessary global dependencies especially for deployment. _(ie. favour using local .bin, avoid gulp)_
* Must be low volume production ready launchable via npm start for upstart.
* ES2015 as much as practical

### Future goals
* Unit tests
* Feature tests
* React Hot Loading
* Simple basic deployment script to SSH into a server and run a git pull.

## Get Up and Running

Clone the repository

```
git clone https://github.com/ryardley/reactomorph
```

Install dependencies
```bash
$ npm i
```

The start in development mode

```bash
$ npm start
```

Then shoot over to [http://localhost:3000/](http://localhost:3000/) to be amazed at the awesomeness.

## Environment vars

To customise your environment create a .env file to provide some simple environment information.

```bash
# .env
PORT=3181
ASSET_HOST=http://localhost:8080
```

Here we are setting the development port to run on 3181 and the location of the transpiled assets to be http://localhost:8080 (webpack-dev-server defaults)
