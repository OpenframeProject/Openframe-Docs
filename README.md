# Documentation for Openframe

## How To Contribute

Please help improving these docs. Feel free to [add an issue](https://github.com/OpenframeProject/Openframe-Docs/issues) or [create a pull request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/about-pull-requests).

All content is located in `source/index.html.md` and other files in `source/includes/`.

## Development

These docs are based on [Slate](https://github.com/slatedocs/slate). Find more info in the [Slate Wiki](https://github.com/slatedocs/slate/wiki).

Follow this guide to setup a development environment to verify your content updates or improve the website code:

### 0. Prerequisites

Make sure to meet Slate's prerequisites (Ruby, …): https://github.com/slatedocs/slate#prerequisites

### 1. Install

`bundle install`

This installs Slate's dependencies.

### 2. Run development server

`npm start`

This starts a preview web-server (http://localhost:4567). Use this to verify your changes. 

More info (https://middlemanapp.com/basics/development-cycle/#middleman-server): 
> You can create and edit files in the `source` folder and see the changes reflected on the preview web-server.
> You can stop the preview server from the command-line using `Ctrl + C`.

### 3. Share your changes

Once you're done, commit your work and [create a pull request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/about-pull-requests). A maintainer of the project is going to review and deploy your changes.

## Deploy

`npm run deploy`

This builds the docs, creates a commit on the `master` branch and pushes it into `gh-pages` branch. The changes are then available at https://docs.openframe.io/. 

## Build

`npm run build`

This compiles the docs into the `build` directory. 