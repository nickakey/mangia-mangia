# mangia-mangia


Get names of random italian food dishes
Uses CodeCov and Travis CI

## Installation

This package is distributed via npm:

```
npm install mangia-mangia
```

## Usage

```javascript
var names = require('mangia-mangia');
var allNames = names.all;
var randomName = names.random();
var threeRandomNames = names.random(3);
```

## Other

### Project Setup

This project assumes you have [NodeJS v6](http://nodejs.org/) or greater installed. You should
also have [npm v3](https://www.npmjs.com/) or greater installed as well (this comes packaged
with Node 6). You'll also need a recent version of [git](https://git-scm.com/) installed
as well.

1. [Sign up](https://github.com/join) for a GitHub Account (if you don't already have one)
2. [Fork](https://help.github.com/articles/fork-a-repo/) this repo
3. [Clone](https://help.github.com/articles/cloning-a-repository/) your fork
4. In the directory you cloned the repository, run `git fetch --all`

If you need help with these steps, you might check out
[this free Egghead.io course](http://kcd.im/pull-request) which can help you get things going.

Finally, based on which version of the project you're looking for (workshop, egghead, or
Frontend Masters) you'll run one of the following commands in the cloned directory:

- **Frontend Masters Workshop**: `npm run setup:fem`
- **Egghead Course**: `npm run setup:egghead`

If you get any failures at this point something is wrong and needs to be fixed. Remember,
[Google](https://google.com) and [StackOverflow](https://stackoverflow.com) are your friends.

You might find it helpful to see a list of the available branches. Run: `git branch` for that.
