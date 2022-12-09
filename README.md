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
