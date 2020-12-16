import type { SnowpackPluginFactory } from "snowpack";

const plugin: SnowpackPluginFactory = () => ({
  name: "snowpack-plugin-hmr-appender",
  async transform({id, contents}) {
    if (/.*\.mst\.(js|jsx|ts|tsx)$/.test(id)) {
      return `
        ${contents}
        /* esm-hmr for snowpack */ 
        import.meta.hot.accept(({ module }) => {
          import.meta.hot.invalidate();
        });
      `;
    }
  },
});

export default plugin;
