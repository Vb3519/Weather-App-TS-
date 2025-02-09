const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env, argv) => {
  const isInDevMode = argv.mode === 'development';

  return {
    // mode: 'development', // для режима разработки
    mode: isInDevMode ? 'development' : 'production', // установка режима разработки
    entry: './src/scripts/index.ts', // Входной файл для Webpack
    output: {
      filename: 'bundle.[contenthash].js', // Генерация имени с хэшем
      path: path.resolve(__dirname, 'dist'),
      clean: true, // Очистка папки dist перед новой сборкой
      // publicPath: '/', // базовый путь для локальной разработки
      // publicPath: '/Weather-App-TS-', // базовый путь для загрузки проекта на gh-pages (по названию проекта)
      publicPath: isInDevMode ? '/' : '/Weather-App-TS/', // объединение двух вариантов путей
    },
    resolve: {
      extensions: ['.ts', '.js'], // Поддержка TypeScript и JavaScript файлов
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/, // Обработка TypeScript файлов
          use: 'ts-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.css$/, // Обработка CSS файлов
          // use: [MiniCssExtractPlugin.loader, 'css-loader'],
          use: ['style-loader', 'css-loader'], // заменил (см. строку выше) для автом. обновления стилей без перезагрузки страницы
        },
        {
          test: /\.(jpg|jpeg|png|gif|svg|woff|woff2|eot|ttf)$/, // Обработка изображений и шрифтов
          type: 'asset/resource',
          generator: {
            filename: 'assets/[name].[contenthash][ext]', // Генерация уникальных имен файлов
          },
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html', // Шаблон для HTML файла
      }),
      new MiniCssExtractPlugin({
        filename: 'styles.[contenthash].css', // Генерация имени для CSS файлов с хэшем (продакшен режим)
      }),
    ],
    devServer: {
      // тут chatGpt может ошибаться и писать старый синтаксис
      static: {
        directory: path.resolve(__dirname, 'dist'),
      },
      watchFiles: ['src/**/*', 'index.html'], // автоматически отслеживает изменения в файлах и обновляет страницу
      port: 8080,
      hot: true, // Горячая перезагрузка
      open: true, // Открытие браузера при запуске
    },
    optimization: {
      splitChunks: {
        chunks: 'all', // Разделение кода на чанки
      },
    },
  };
};

// Устаревший вариант синтаксиса (chatGpt ошибается иногда):
// devServer: {
//     contentBase: path.resolve(__dirname, 'dist'),
//     port: 8080,
//     hot: true, // Горячая перезагрузка
//     open: true, // Открытие браузера при запуске
//     watchContentBase: true
//   }
