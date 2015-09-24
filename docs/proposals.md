# Draft proposal for architectural direction of reduxor

## Refactor for modularity.
Currently the format provided is similar to most Flux-type architectures and only assumes the most basic of application considerations. In the real world scalable applications are modular and need to be structured in a modular way. As a consequence of the lack of scalability the structure of reduxor will be as follows:

### Potential fractal modularity. 

```
.
└── app
    ├── config
    ├── locales
    ├── modules
    │   ├── app
    │   │   ├── index.js
    │   │   └── views
    │   │       └── App
    │   │           ├── index.js
    │   │           └── styles.css
    │   ├── auth
    │   │   ├── actions
    │   │   │   ├── loadAuth.js
    │   │   │   ├── login.js
    │   │   │   └── logout.js
    │   │   ├── helpers
    │   │   │   └── utils.js
    │   │   ├── index.js
    │   │   ├── reducers
    │   │   │   ├── loadAuth.js
    │   │   │   ├── login.js
    │   │   │   └── logout.js
    │   │   └── views
    │   │       ├── Login
    │   │       │   ├── index.js
    │   │       │   └── styles.css
    │   │       └── partials
    │   │           └── LoginForm
    │   │               └── index.js
    │   └── navigation
    │       ├── actions
    │       │   └── navigate.js
    │       ├── index.js
    │       ├── modules
    │       │   └── navButton
    │       │       └── views
    │       │           └── NavigationButton
    │       │               └── index.js
    │       ├── reducers
    │       │   └── navigate.js
    │       └── views
    │           └── Nav
    │               ├── index.js
    │               └── styles.css
    └── redux
        ├── createStore.js
        ├── middleware
        │   └── actionPromises.js
        ├── rootActions.js
        └── rootReducer.js
```
