# README 

## Activating the project for local development 

- Local development makes modifying this site easy. You will need to install Node version 21 and NPM. For Node I recommend a version manager. [NVM](https://github.com/creationix/nvm) for OSX or Linux. [NVM-Windows](https://github.com/coreybutler/nvm-windows) for Windows. Instructions for NPM are then [here](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm).`

If you have nvm installed, you can use it to install node at the correct version with 

`nvm install 21`
`nvm use 21`

Once this is set up, you can install the needed files with `npm install`. 

You'll need to tell the site that you are working on it locally. 

Create a `.env` file at the base of the project and add the following variable to tell the project it is locally based. 

`IS_LOCAL=true`

`"serve:basic-dev"` will serve the site locally allowing you to develop and see changes in real time. 

## Options

Want to reverse the order of episodes as they are displayed? In `src/_data/sites.js` the object has a property `playOrder`. Ascending will set the order to reverse what is in `episodes.js` in the same folder. 

## Features

All images are expandable on click. 

The player behavior is run from some JS files in `assets`. 

This is an [HTMX](https://htmx.org/) project. HTMX is a library that allows parts of the page to change while leaving others in place. 

It leverages a tool called XPlayer. XPlayer is an audio and video player optimized for HTMX. It pulls javascript object data off the page (where it is embedded) and into the player and allows it to run while the user navigates across the site. It uses localStorage to retain user state over time when needed. 

## Data Locations

All assets sit in the `src/assets` which includes the `imgs` folder with all images used on this site. 

## Updates 

Updates can be done manually by running the Grab Daily Build action in GitHub. If it doesn't update an existing article the way you'd expect it can be altered in the `src/articles` folder. If it isn't auto-updated like expected, just delete the articles in there which are stored as files in that folder that end with `.md`. 

You can also run these updates locally by running `npm run build-all-from-source` after `npm install`. 

## Files and how to edit them. 

This is an Eleventy project and [most of the documentation you need is available on that project's site](https://www.11ty.dev/docs/). 

### Under `/src/` 

`_data` holds information about the site and its episodes. They are in Javascript and return objects to the build process.

`_assets` controls assets around javascript and images for building the site that come from the designer and should not be modified. 

`_includes` contains the templates for the various site pages. They are mostly in `.11ty.js` which is HTML built via JS functions. All return a built HTML string filled with data provided at build time by the Eleventy engine. 

`_sass` provides the style rules in the [SASS](https://sass-lang.com/) format, a CSS extension to make authoring CSS easy to manage.

Sass files are broken out into specific sub files to make them easier to manage. They are included into the main CSS file via `_index.sass`. 

`@use 'variables'` includes the `_variables.sass` file for setting the size of the breakpoints for non-desktop devices. 

`template-` files are included in the templates as built stand-alone CSS files for performance reasons. 

`articles` contains the articles build from the JSON API from the Public Healthwatch website. 

`episodes` is currently unused. 

`utils` has a bunch of utility functions used elsewhere in the project. 

The `.md` files at the base of the `src` folder. They trigger specific templates at `[site url]/[md filename]`. 

`robots.njk` sets the `robots.txt` file. 

### Under `__build-tools`

These are functions and reference material for building article files from the WordPress REST API. 

### Under `.github/workflows` 

These are GitHub Actions for building the site on commit to main and for retrieving and committing the articles from the REST API. 

### Base files 

`.editorconfig` uses the Editor Config plugin for the IDE to make sure all code styles are consistent. 

`.nojekyll` lets GitHub know this is not a Jekyll CMS Github Pages project. 

`.nvmrc` gives the Node version. 

`eleventy.config.js` gives the code instructions to Eleventy for building the site. 

`package-lock.json` should not be touched. 

`package.json` sets the Node install dependencies. 

`README.md` is this file. 

~~I will pull the articles based on tag applied~~
~~Order the homepage plays in the opposite order? I will set a variable to make it easy to flip back and forth. Default to start with trailer or eps or 1 - will show how.~~
RSS parser for episodes - good to have
~~Document all in README~~
~~Handle auto pulling the articles from Public Health Watch~~
~~Assets location noted in the README~~
~~Additional articles are still planned so we should switch the READ page to support multiple articles.~~
~~Make maps expandable~~
