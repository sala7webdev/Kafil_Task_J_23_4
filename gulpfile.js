const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const { series } = require('gulp');
const replace = require('gulp-replace');
const fs = require('fs');
const path = require('path');



function buildHTML() {
  return gulp.src('src/html/index.html')
    .pipe(replace(/<!--#([^#]+?)-->/g, function (match, placeholder) {
      const filePath = path.join('src/html', `${placeholder.trim()}.html`);
      if (fs.existsSync(filePath)) {
        return fs.readFileSync(filePath, 'utf8');
      }
      return match; // If file doesn't exist, return the original placeholder
    }))
    .pipe(gulp.dest('dist')); // Output directory
};



function combilecss() {
  return gulp.src('./src/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist/css'));
};

function joinJSFiles() {
  return gulp.src('src/scripts/script.js') // Change 'src/main.js' to your main JavaScript file
    .pipe(replace(/\/\/\s*###([^\n]+?)\n/g, function (match, placeholder) {
      const filePath = path.join('src/scripts', `${placeholder.trim()}.js`);
      if (fs.existsSync(filePath)) {
        return fs.readFileSync(filePath, 'utf8');
      }
      return match; // If file doesn't exist, return the original placeholder
    }))
    .pipe(gulp.dest('dist/js')); // Output directory for JavaScript files
}


function watch() {
  gulp.watch("./src/**/*.html", series(buildHTML));
  gulp.watch("./src/scss/**/*.scss", series(combilecss));
  gulp.watch("./src/scripts/**/*.js", series(joinJSFiles));
}

// Build task to prepare for deployment
gulp.task('build', gulp.series(buildHTML, combilecss, joinJSFiles));

// Default task
gulp.task('default', gulp.series('build'));


exports.watch = watch;
exports.buildHTML = buildHTML;
exports.combilecss = combilecss;
exports.joinJSFiles = joinJSFiles;

