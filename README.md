# snowpack-plugin-hmr-appender

add fallback code `import.meta.hot.invalidate();` for mst store file like '*.mst.(js|jsx|ts|tsx)'

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
    ['snowpack-plugin-hmr-appender', { filters: ['.*.(mst|store).(js|jsx|ts|tsx)$'] }],
  ],
  ...
}

```

