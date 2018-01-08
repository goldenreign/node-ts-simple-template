# Simple Node.js + TypeScript project template

## Overview

Simple Node.js + TypeScript project template ready to build console apps and export them to end-users.

## Usage

Simple start:

```shell
npm install
npm run dev
```

Structure:

```plaintext
.
├── dist   - application bundle (single JS)
├── export - exported application (JS + package.json)
├── out    - compiled application files (JS)
├── src    - source files (TS)
```

Scripts:

`npm run dev` - compile and run project

`npm run export` - export compiled app along with package.json to `export` folder

`npm start` - used to run exported app

`npm run bundle` - compile and bundle app to single file to `dist` folder

`npm run build` - compile app to `out` folder

`npm run clean` - clean `out` folder

`npm run fresh` - remove generated files and folders (including `node_modules` and `package-lock.json`)
