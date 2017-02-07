// 1. `npm init` in no-server project
// 1b. Copy dependencies from package.json into no-server package.json
// 1c. run `npm install` on command line
// 2. copy gulpfile.js into no-server
// 3. Update any folder paths in gulpfile.js to match your structure



var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var CacheBuster = require('gulp-cachebust');
var print = require('gulp-print');
var babel = require('gulp-babel');
var uglify = require('gulp-uglify');

var cachebust = new CacheBuster();

gulp.task('build-css', function() {
    return gulp.src('public/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(cachebust.resources())
        .pipe(concat('styles.css'))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./public/dist'));
})

gulp.task('build-js', function() {
   return gulp.src('public/**/*.js')               
      .pipe(sourcemaps.init())
      .pipe(print())                        
      .pipe(babel({ presets: ['es2015'] }))
      .pipe(concat('bundle.js'))
      //.pipe(uglify())
      .pipe(sourcemaps.write('./')) 
      .pipe(gulp.dest('./public/dist/js')); 
});

gulp.task('build', ['build-css', 'build-js'], function() {
    return gulp.src('index.html')
        .pipe(cachebust.references())
        .pipe(gulp.dest('dist'));
});

gulp.task('watch', function() {
    return gulp.watch(['./index.html','./partials/*.html', './styles/*.*css', './js/**/*.js'], ['build']);
});

