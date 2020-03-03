# Scripts

This project comes with scripts for repetitive processes (such as creating a
component) in order to standardize it and reduce errors

## Components

```
npm run create-component `ComponentName`
```

Creates a React component within `src/components` with this structure:

```
ComponentName/
  tests/
    ComponentName.test.js
  ComponentName.js
  index.js
```

Each component will be exposes through the `index.js` and comes with its own
unit test file

## Pages

```
npm run create-page `pageName`
```

Creates a React component within `src/pages` with this structure:

```
pageName/
  tests/
    pageName.test.js
  pageName.js
  index.js
```

Each page will be exposes through the `index.js` and comes with its own unit
test file

## Templates

```
npm run create-template `TemplateName`
```

Creates a React component within `src/templates` with this structure:

```
ComponentName/
  tests/
    ComponentName.test.js
  ComponentName.js
  index.js
```

Each component will be exposes through the `index.js` and comes with its own
unit test file

## Hooks

```
npm run create-hook `hookName`
```

Creates a React hook within `src/hooks` with this structure:

```
hook/
  tests/
    hook.test.js
  hook.js
  index.js
```

Each hook will be exposes through the `index.js` and comes with its own unit
test file
