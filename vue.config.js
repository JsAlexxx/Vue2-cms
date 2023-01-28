const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  publicPath: './',
  css: {
    loaderOptions: {
      scss: {
        // 统一写成这种格式
        additionalData: `
            @use "@/styles/variable.scss" as *;
          `,
      }
    }
  }
});
