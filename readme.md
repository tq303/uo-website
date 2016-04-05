### React Redux Template

Should get you started

### Prerequisites
```
nodejs
npm
```

### Development
Run `npm start` to fire up webpack-dev-server. Site is hosted on:
```
	http://localhost:8888/webpack-dev-server/
```

### Production
Run full script, this doesn't provide source-maps
```
	npm run build
```

### Test
Run tests with the following assertions are done with `expect` and the test library is `mocha`.
```
	npm run test
```

### Notes
All front-end files are kept within the `client` folder. When webpack runs a build all compiled files are moved into a `public` folder which is created at the time of compilation.

Sass files are loaded within the javascript with `scss-loader`.