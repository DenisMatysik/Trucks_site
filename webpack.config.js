const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "production",
  entry: {
    // точка входа,
    filename: path.resolve(__dirname, "src/main.js"),
  },
  output: {
    // создаётся попка dist в которой все появиться файл "index.js" со всеми настройками из папки src
    path: path.resolve(__dirname, "dist"),
    filename: "[name][contenthash].js", // добавить меняющееся название файлу чтоб не попал в кэш
    assetModuleFilename: "[name][ext]", // картики будут генерироваться с именем как у их есть, не с рандомным
    clean: true, // удалять старые файлы из папки dist при изменени файлов или пересборке
  },
  performance: {
    hints: false, // отключение различный подсказок
    maxAssetSize: 512000, // максиамльый размер картинки
    maxEntrypointSize: 512000, // ленивая подгрузка - т.е. будет подгружать файл больше максимального размера позже
  },
  devServer: {
    port: 9000,
    compress: true, // сжатие файлов при отображении на сервере
    hot: true, // при изменению любого файла будет сервер перезапускаться и мы увидим это
    static: {
      directory: path.join(__dirname, "dist"), // пользователю будут показаны файлы что лежат в папке dist
    },
  },
  module: {
    rules: [
      {
        test: /\.scss$/, // т.е когда будут подключаться файлы с расширением "scss"
        use: ["style-loader", "css-loader", "sass-loader"], // будет использоваться библиотека sass-loader (преобразует файлы scss в css), затем css-loader, затем style-loader
      },
      {
        test: /\.(png|svg|jpeg|jpg|gif)$/i, // т.е когда будут подключаться файлы с расширением "png|svg|jpeg|jpg|gif" (i - для регистров PNG)
        type: "asset/resource", // это картика, и с этими файлами будут обращатся как с картинками
      },
    ],
  },
  plugins: [
    new htmlWebpackPlugin({
      title: "My web page",
      filename: "index.html",
      template: "src/index.html", // файл шаблон для конечного файла index.html
    }),
  ],
  // mode: "development"
};
