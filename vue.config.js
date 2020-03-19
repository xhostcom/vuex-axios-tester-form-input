module.exports = {
  transpileDependencies: ["vuetify"],
  // options...
  devServer: {
    proxy: "http://localhost:8080/"
  }
};
