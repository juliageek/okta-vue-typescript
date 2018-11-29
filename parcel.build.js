const Bundler = require('parcel-bundler');
const Path = require('path');
const spawn = require('child_process').spawn;

// Entrypoint file location
const file = Path.join(__dirname, './index.html');

// Bundler options
const options = {
  outDir: './dist',
  outFile: 'index.html',
  // publicUrl: './',
  watch: process.env.NODE_ENV !== 'production',
  cache: true,
  cacheDir: '.cache',
  minify: false,
  target: 'browser',
  https: false,
  logLevel: 3, // 3 = log everything, 2 = log warnings & errors, 1 = log errors
  hmrPort: 0, // The port the HMR socket runs on, defaults to a random free port (0 in node.js resolves to a random free port)
  sourceMaps: true
  // hmrHostname: '',
};

function run_script(script, args) {
  const child = spawn(script, args);

  child.stdout.on('data', function (data) {
    process.stdout.write(data);
  });

  child.stderr.on('data', function (data) {
    process.stdout.write(data);
  });
}

async function runBundle() {
  // Initializes a bundler using the entrypoint location and options provided
  const bundler = new Bundler(file, options);

  bundler.on('buildEnd', () => {
    run_script([
      '--ext',
      '.js,.vue',
      'src',
      //'test/unit'
    ]);

    run_script('./node_modules/stylelint/bin/stylelint.js', [
      'src/**/*.scss'
    ])
  });

  // // Run the bundler, this returns the main bundle
  // // Use the events if you're using watch mode as this promise will only trigger once and not for every rebuild
  if (process.env.NODE_ENV !== 'production') {
    await bundler.serve(8080);
  } else {
    await bundler.bundle();
  }
}

runBundle();
