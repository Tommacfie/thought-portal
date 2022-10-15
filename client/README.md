# Steps to set up the eslint and prettier config for React:

## Eslint:

1. install eslint:

```
npm i -D eslint-config-react-app
```

2. create an .eslint.json config file in the root of the project

3. copy a/the configuration from the .eslintrc.json file

## Prettier:

1. install prettier:

```
npm i -D prettier
```

2. create a .prettierrc.json file in the root of the project

3. copy a/the configuration from the .prettierrc.json file

### Configure Eslint to work with Prettier:

1. install the package:

```
 npm i -D eslint-config-prettier
```

2. add prettier as the LAST element in the 'extends' property

Add some scripts to package.json:

1. copy the following:

```
{
"lint": "eslint --ext .js,.ts,.jsx,.tsx src",
"format": "yarn run lint --fix & yarn prettier --write 'src/\*_/_.{js,jsx,ts,tsx}'"
}
```

## Husky:

1. install Husky with the automatic configuration:

```
npx husky-init && npm install
```

- this adds a default precommit hook that can be edited

2. add a custom precommit hook that runs the format script on commit:

```
npx husky add .husky/commit-msg 'npm run format'
```
