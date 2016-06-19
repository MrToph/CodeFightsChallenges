var gulp = require('gulp');
var path = require('path');
var webpack = require('webpack');
const spawn = require('child_process').spawn;

var isProduction = false; // process.env.NODE_ENV ? process.env.NODE_ENV.trim() == 'production' : false,
var serverPort = 8080;
var outputPath = path.join(__dirname, 'src/build');
var outputFileName = 'all.min.js';

var config = {
  entry: [
    './src/js/app.jsx'
  ],
  output: {
    path: outputPath,
    filename: outputFileName
  },
  devtool: isProduction ? null : 'source-map', // eval?
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'stage-0']
        }
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  plugins: [],
  serverPort: serverPort
};

if (isProduction) {
  config.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  );
}

gulp.task('build', function (done) {
  webpack(config).run(function (err, stats) {
    if (err) {
      console.log('GulpWebpackError', err);
    } else {
      console.log(stats.toString());
    }
  });
});

gulp.task('phantom', function (done) {
  runInPhantomJs(done);
});

function runInPhantomJs (done) {
  var args = ['./src/js/app.jsx'];
  var phantomjsProcess = spawn('../phantomjs/bin/phantomjs.exe', args);

  phantomjsProcess.stdout.on('data', function (data) {
    console.log(data.toString());
  });

  phantomjsProcess.on('close', function (code) {
    console.log(code);
    done();
    phantomjsProcess.kill();
  });

}
