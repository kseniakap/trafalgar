/* eslint-disable @typescript-eslint/no-var-requires */
const urljoin = require('url-join');
const webpack = require('webpack');
const paths = require('./config/paths');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const EnvironmentPlugin = webpack.EnvironmentPlugin;
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const WatchMissingNodeModulesPlugin = require('react-dev-utils/WatchMissingNodeModulesPlugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const ReactRefreshTypeScript = require('react-refresh-typescript');
const typescriptFormatter = require('react-dev-utils/typescriptFormatter');

// enable .env file
require('dotenv').config({ path: paths.dotenv });

module.exports = (env, argv) => {
  const mode = argv.mode || env.NODE_ENV || 'none';
  const isProduction = mode === 'production';

  const PUBLIC_PATH = env.PUBLIC_PATH || '/';
  const STATIC_PATH = PUBLIC_PATH;

  return {
    mode,
    target: isProduction ? ['web', 'es5'] : 'web',
    entry: {
      app: paths.appIndex,
    },
    output: {
      filename: 'js/[name].js',
      path: paths.appBuild,
      publicPath: 'auto',
      clean: true,
    },
    resolve: {
      alias: {
        '@': paths.appSrc,
        '~': paths.appSrc,
      },
      extensions: paths.moduleFileExtensions.map((ext) => `.${ext}`),
    },
    devtool: isProduction ? false : 'inline-source-map',
    optimization: {
      minimize: isProduction,
      // This is only used in production mode
      minimizer: [
        // @NOTE: выключаю удаление debugger'ов, see - https://github.com/webpack/webpack/blob/main/lib/config/defaults.js#L995
        new TerserWebpackPlugin({
          terserOptions: {
            compress: {
              passes: 2,
              drop_console: false,
              drop_debugger: false,
            },
          },
        }),
        new CssMinimizerPlugin(),
      ],
      // @NOTE: fix HMR, see - https://stackoverflow.com/a/66197410
      runtimeChunk: isProduction ? undefined : 'single',
      splitChunks: {
        chunks: 'all',
      },
    },
    module: {
      strictExportPresence: true,
      rules: [
        // TypeScript (+tsx)
        {
          test: /\.tsx?$/,
          use: [
            {
              loader: 'ts-loader',
              options: {
                getCustomTransformers: () => ({
                  before: isProduction ? [] : [ReactRefreshTypeScript()],
                }),
                // @NOTE: Enable transpileOnly to skip TS errors in dev mode
                transpileOnly: !isProduction,
                configFile: paths.appTsConfig,
              },
            },
          ],
        },
        // CSS, PostCSS, Sass
        {
          test: /\.(scss|css|sass)$/,
          use: [
            isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
            'css-loader',
            'postcss-loader',
            'resolve-url-loader', // @IMPORTANT: order is required (https://github.com/bholloway/resolve-url-loader/blob/v5/packages/resolve-url-loader/README.md#configure-webpack)
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true, // required
              },
            },
          ],
        },
        // Images
        {
          test: /\.(png|jpg|jpeg|gif)$/i,
          type: 'asset/resource',
          generator: {
            filename: 'images/[name][hash][ext][query]',
          },
        },
        {
          test: /\.(svg)$/,
          use: ['@svgr/webpack', 'file-loader'],
        },
        // Fonts
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          type: 'asset/resource',
          generator: {
            filename: 'fonts/[name][hash][ext][query]',
          },
        },
        // ES6 dependencies transpile -> ES5 (ie11 support)
        isProduction && {
          test: /\.js$/,
          include: (name) => {
            const moduleNames = [
              // modules to transpile with swc
              '@moxy\\next-layout',
            ];

            if (moduleNames.some((moduleName) => name.includes(moduleName))) {
              return true;
            }
            return false;
          },
          use: {
            loader: 'swc-loader',
            options: {
              jsc: {
                parser: {
                  syntax: 'ecmascript',
                },
                target: 'es5',
              },
            },
          },
        },
      ].filter(Boolean),
    },
    plugins: [
      /**
       * Enable dev ts warnings (when ts-loader transpileOnly enabled)
       */
      !isProduction &&
        new ForkTsCheckerWebpackPlugin({
          typescript: {
            checkSyntacticErrors: true,
            tsconfig: paths.appTsConfig,
            formatter: typescriptFormatter,
          },
        }),
      /**
       * Copy static files
       */
      new CopyWebpackPlugin({
        patterns: [{ from: paths.appPublicStatic, to: './' }],
      }),
      new HtmlWebpackPlugin({
        template: paths.appHtml,
        publicPath: PUBLIC_PATH,
        filename: 'index.html',
        templateParameters: {
          urljoin,
          STATIC_PATH,
        },
      }),
      new EnvironmentPlugin({
        NODE_ENV: env.NODE_ENV || 'development',
        BUILT_AT: env.BUILT_AT || '',
        GIT_COMMIT: env.GIT_COMMIT || '',
        GIT_BRANCH: env.GIT_BRANCH || '',
        DEVELOPMENT_IN_PRODUCTION: env.DEVELOPMENT_IN_PRODUCTION || '',
        APP_BASE_URL: env.APP_BASE_URL || '/',
        PETS_API_BASE_URL: env.PETS_API_BASE_URL || 'https://petstore3.swagger.io/api/v3',
      }),
      new MiniCssExtractPlugin({
        filename: 'css/[name].css',
        chunkFilename: 'css/[id].css',
      }),
      // Experimental hot reloading for React
      // https://github.com/facebook/react/tree/master/packages/react-refresh
      !isProduction &&
        new ReactRefreshWebpackPlugin({
          overlay: false,
        }),
      // If you require a missing module and then `npm install` it, you still have
      // to restart the development server for webpack to discover it. This plugin
      // makes the discovery automatic so you don't have to restart.
      // See https://github.com/facebook/create-react-app/issues/186
      !isProduction && new WatchMissingNodeModulesPlugin(paths.appNodeModules),
    ].filter(Boolean),
    devServer: {
      contentBase: paths.appBuild,
      host: env.HOST || 'localhost',
      port: env.PORT || 9000,
      historyApiFallback: true,
      allowedHosts: ['.ngrok.io'], // allow host ngrok
      inline: true,
      hot: true,
    },
  };
};
