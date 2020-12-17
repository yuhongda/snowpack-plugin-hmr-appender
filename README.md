# snowpack-plugin-hmr-appender

add fallback code for mst store file like '*.mst.(js|jsx|ts|tsx)'

Install
-----

```javascript

yarn add -D snowpack-plugin-hmr-appender

```


Usage
-----

And then in `snowpack.config.ts`

```javascript

export default {
  ...
  plugins: [
    ['@snowpack/plugin-react-refresh'],
    ['snowpack-plugin-hmr-appender'],
  ],
  ...
}

```

