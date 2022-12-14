module.exports = {
  entry: {
    contenido: "./src/contenido.js",
    actividad: "./src/actividad.js",
    diccionario: "./src/diccionario.js",
    actividades: "./src/actividades.js",
    listaLectura: "./src/listaLectura.js",
    index:"./src/index.js"
  },
  output: {
    path: __dirname + "/public/app",
    publicPath: "/app/",
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              [
                "@babel/preset-env",
                {
                  useBuiltIns: "usage",
                  corejs: 3,
                },
              ],
            ],
            plugins: ["@babel/plugin-proposal-class-properties"],
          },
        },
      },
    ],
  },
};
