# Restoration & Renewal - Houses of Parliament

## Installation

```
npm i
```

Create a `.env` file at root level and add those two lines

```
CONTENTFUL_SPACE_ID=
CONTENTFUL_ACCESS_TOKEN=
```

Log in Contentful, go to the Restoration & Renewal - HoP space, from the header
menu select `Settings` and from the dropdown menu select `API Keys`

Click the `Main` API key link and you should see a page with

- SpaceID
- Content Delivery API - access token

Copy and paste those values in the `.env` file

Now you're good to go

## Local development

Launch the local dev server with hot reload (http://localhost:8000)

```
npm start
```

This will pull down content from Contentful and build a local version of the
website

Every time you update content in Contentful you have to restart the local
environment

## Storybook

Launch the Storybook for isolated components development

```
npm run storybook
```

## Material UI

The site uses Material UI React Framework, if you need to access any of the
components or features from the framework - see the documentation below.

https://material-ui.com/getting-started/usage/

## Git hooks

Every time you commit, there's going to be a `pre-commit` hook which will run an
health check which include:

- eslint
- prettier
- test
- build

If all of those are green, the commit will succede, otherwise you'll receive an
error, which could either be:

- linting error
- failing test
- build failure

After everything is fixed, try to commit again and hopefully it's going to work!

## VSCode settings

If you want to take advantage of the built in features of VSCode then follow
along:

- Install Eslint exstension
- Install Prettier extension

Go to settings, select code visualization and add those two lines

```
"editor.defaultFormatter": "esbenp.prettier-vscode", // format code with prettier
"editor.formatOnSave": true // format code authomatically on save
```

## Scripts

For scripts specifications please have a look [here](scripts/RADME.md)

## Accessibility

To make sure that the general public can access this website with ease we are
working towards meeting the AA rating set by WCAG.
