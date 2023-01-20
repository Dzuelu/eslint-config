# eslint-config
A lint config that can be used in other projects simply

## Adding to repo
To add to a repo, simply run the following command:
```
git submodule add https://github.com/Dzuelu/eslint-config
```
Recommended to add to .gitignore before running that command if you have strict ignore settings.

Also you will have to run the submodules command to pull the repo in github workflows or on new git clones.
```
git submodule update --init --recursive
```

## Using the config
First you need to add the following to your `devDependencies` in `package.json`
```
"eslint-config": "file:eslint-config"
```


And then create a `.eslintrc.js` file with the following
```typescript
const defaultLint = require('eslint-config');

module.exports = defaultLint;
```

And your done!
