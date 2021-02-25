import type { SnowpackPluginFactory } from "snowpack";

const plugin: SnowpackPluginFactory = (_snowpackConfig, pluginOptions: any) => ({
  name: "snowpack-plugin-hmr-appender",
  async transform({ id, contents }) {
    const { filters } = pluginOptions;

    if (filters && Array.isArray(filters)) {
      for (let i = 0; i < filters.length; i++) {
        const regEx = new RegExp(filters[i]);
        if (regEx.test(id)) {
          return `
          ${contents}
          /* esm-hmr for snowpack */ 
          import.meta.hot.accept(({ module }) => {
            import.meta.hot.invalidate();
          });
        `;
        }
      }
    }
  },
});

export default plugin;
