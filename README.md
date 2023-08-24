# eslint-config
A lint config that can be used in other projects as simply as possible

## Adding to repo
Example with `ts-eslint-cli` plugin.
```
yarn add --dev ts-eslint-cli @dzuelu/eslint-config
```

Create a `.eslintrc.ts` file with the following
```typescript
import { ESLint } from 'eslint';

const config: ESLint.ConfigData = {
  extends: ['@dzuelu']
};

export default config;
```

And add the following to package.json scripts
```
"lint": "ts-eslint-cli . --ext .ts"
```
