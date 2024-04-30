
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const { series } = require('gulp');
const replace = require('gulp-replace');

const fs = require('fs');
const path = require('path');
var uglifycss = require('gulp-uglifycss');
const uglify = require('gulp-minify');




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


/*************
 * Scss Files
 ***********/

function combileAndMinifyCSS() {
  return gulp.src('./src/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(uglifycss({
      "maxLineLen": 80,
      "uglyComments": true
    }))
    .pipe(gulp.dest('./dist/css'));
};


/********************
 * XX Scss Files XX
 ******************/

/*************
 * Js Files
 ***********/
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

gulp.task('uglifyjs', () => {
  return gulp.src('dist/js/script.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'));
});


/******************
 * XX Js Files XX
 ****************/


/***************
 * Watch Task
 *************/

function watch() {
  gulp.watch("./src/**/*.html", series(buildHTML));
  gulp.watch("./src/scss/**/*.scss", series(combileAndMinifyCSS));
  gulp.watch("./src/scripts/**/*.js", series(joinJSFiles));
}


/*******************
 * XX Watch Task XX
 ******************/

// Build task to prepare for deployment
gulp.task('build', gulp.series(buildHTML, combileAndMinifyCSS, joinJSFiles, 'uglifyjs'));

// Default task
gulp.task('default', gulp.series('build'));


exports.watch = watch;
exports.buildHTML = buildHTML;
exports.combileAndMinifyCSS = combileAndMinifyCSS;
exports.joinJSFiles = joinJSFiles;

