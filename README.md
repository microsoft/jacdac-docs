# Jacdac Documentation

**Jacdac** is a plug-and-play hardware and software stack for microcontrollers and their peripherals such as sensors and actuators. Jacdac is primarily designed for “modular electronics” scenarios that support rapid prototyping, creative exploration, making and learning through physical computing. Jacdac is designed to be cheap, flexible and extensible.

This repository contains sources of [Jacdac](https://aka.ms/jacdac).

-   [User Documentation](https://aka.ms/jacdac/)
-   Discussions at https://github.com/microsoft/jacdac/discussions
-   Issues are tracked on https://github.com/microsoft/jacdac/issues

The rest of this page is for developers of the jacdac-ts library.

## Developer setup

-   Open this repository online at https://github.dev/microsoft/jacdac-docs

All command line instructions assume a bash-like terminal.

On Windows, you may need to run these commands within Git Bash or Windows Subsystem for Linux (WSL), unless you have bash-like tools available locally. Previous installs have worked on WSL2 with Ubuntu-20.04.

### Codespaces

Edit this project directly from your browser using GitHub Codespaces. If you have access to them,

-   open project in a new codespace (https://github.dev/microsoft/jacdac-docs)
-   launch the docs server

```
yarn develop
```

-   click on the generated URL in the terminal output and voila!

### Local Setup

-   install node.js
    \*\* Have successfully tested with node 14.17.0. There were some errors when using node 16.3.0 (note made on 6/2021, please update if errors with node v16.3.0 are resolved.)
-   install python 2 (if you don't have it already)
-   install yarn globally if needed

```
npm install -g yarn
```

-   setup repo

```
yarn setup
```

**Do not use npm**

#### Updating dependencies

Use [npm-check-updates](https://www.npmjs.com/package/npm-check-updates) to upgrade all dependencies expect blockly*, tfjs, mdx.

### VS Code

You are welcome to use any editor you want! Visual Studio Code
provides seamless support for git sub-modules and is our preferred editor.

-   open [Visual Studio Code](https://code.visualstudio.com/)

```
code .
```

-   install the recommended extensions (**MDX**, **ESLint** and **Prettier** extensions)
-   in the Git view, click on the `jacdac` branch and select `main` so that changes are automatically synched
-   remember that you need a bash-like terminal to run some of these commands - VS Code allows you to start a Git Bash terminal from the new terminals dropdown

### Specs build

To regenerate the service definition JSON files from the `.md` files in jacdac-spec,
run

```
yarn buildspecs
```

This script will update the directory jacdac-ts/jacdac-spec/dist as well as client bindings (for changes to a service or addition of a new service). In particular, the distribution will contain updates for 
- jacdac-ts, which depends on jacdac-spec
- jacdac-docs, which depends on jacdac-ts and many other repos
- pxt-jacdac, the MakeCode extension for Jacdac.
    - a new directory will be created for a newly added service. The directory will have the following files
      - client.gts
      - constants.ts
      - pxt.g.json
    - The above needs to be worked on to ensure it compiles with mkc. In particular
      - cp pxt.g.json pxt.json
      - mv client.gts to client.g.ts (this seems to be a bug in the jacdac-spec spectools code gen for STS)
      - add a test file to pxt.json
      - mkc init
      - mkc build to ensure you get a hex file

### Docs build

-   run the docs web site locally

```
yarn develop
```

If you are offline, set the `JACDAC_OFFLINE=1` environment variable.

```
export JACDAC_OFFLINE=1
```

-   browse to the local server

```
http://localhost:8000?dbg=1
```

To analyze the webpack bundle size,

```
cd docs
gatsby build
gatsby serve
nav to http://127.0.0.1:3001
```

If the build fails after pulling, try

```
yarn clean
```

### Jacdac + MakeCode

### Local build

Run this command to rebuild the makecode packages

```
yarn buildpxt
```

#### Local debugging

Open the multi editor to test MakeCode devices with the Jacdac view. You can select to run Jacdac and/or MakeCode on localhost/web from the drop downs.

https://makecode.com/multi?jacdac=1&localhost=1&beta=1

### Adding a new MakeCode client

Create a new issue in https://github.com/microsoft/jacdac and select the `MakeCode client` template.

### HTML tools

You can do `yarn watch` to watch/build bundles. Bundles are placed under the `dist` folder.

```
yarn watch
```

On another terminal, launch a small web server and
try all the tools under `docs/static/tools/*` at http://localhost:8080/docs/static/tools/js/console.html . These tools load the files under `dist` so you'll want
to also run `yarn watch` on the side.

```
yarn tools
```

-   console http://localhost:8080/docs/static/tools/js/console.html
-   devices http://localhost:8080/docs/static/tools/js/devices.html
-   flashing http://localhost:8080/docs/static/tools/js/flashing.html
-   namer http://localhost:8080/docs/static/tools/js/namer.html
-   tfite http://localhost:8080/docs/static/tools/js/tflite.html
-   streaming http://localhost:8080/docs/static/tools/js/streaming.html
-   streaming-rickshaw: http://localhost:8080/docs/static/tools/js/streaming-rickshaw.html

### Commits create releases

The releases are automatically created by the build system based on the title of the commit:

-   `patch|fix:...` patch
-   `minor:feature:...` minor

### NPM scripts

-   `yarn watch`: Run `yarn build` in watch mode
-   `yarn lint`: Lints code
-   `yarn develop`: Launch docs web service

## Microsoft Open Source Code of Conduct

This project is hosted at https://github.com/microsoft/jacdac-ts.
This project has adopted the
[Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/).

Resources:

-   [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/)
-   [Microsoft Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/)
-   Contact [opencode@microsoft.com](mailto:opencode@microsoft.com) with questions or concerns
