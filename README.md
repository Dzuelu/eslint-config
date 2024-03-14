# eslint-config
A lint config that can be used in other projects as simply as possible

Create a `.eslintrc.js` file with the following
```typescript
const defaultLint = require('dzuelu-eslint-config');

module.exports = defaultLint;
```

And add the following to package.json scripts
```
"lint": "eslint . --ext .ts"
```
