const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "./dist"),
    filename: "bundle.[contenthash:12].js",
    clean: true,
  },
  mode: "production",
  optimization: {
    minimize: true,
    minimizer: [
      "...",
      new ImageMinimizerPlugin({
        minimizer: [
          {
            implementation: ImageMinimizerPlugin.sharpMinify,
            options: {
              encodeOptions: {
                jpeg: { quality: 40 },
                webp: { lossless: true },
                png: { quality: 40 },
              },
            },
          },
          {
            implementation: ImageMinimizerPlugin.svgoMinify,
            options: {
              encodeOptions: {
                multipass: true,
                plugins: ["preset-default"],
              },
            },
          },
        ],
        generator: [
          {
            type: "asset",
            preset: "webp",
            filter: (source, sourcePath) => {
              if (sourcePath.match(/(github|react)/g)) {
                return true;
              }

              return false;
            },
            implementation: ImageMinimizerPlugin.sharpGenerate,
            options: {
              encodeOptions: {
                webp: { quality: 90 },
              },
            },
          },
        ],
      }),
    ],
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(jpg|png|svg|gif)$/i,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024,
          },
        },
        generator: {
          filename: "images/[name].[contenthash:6][ext]",
        },
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "styles.[contenthash:6].css",
    }),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./src/index.html",
    }),
    new CopyPlugin({
      patterns: [
        { from: "src/copy/images", to: "images" },
        { from: "src/webp/images", to: "images" },
      ],
    }),
  ],
};
