var gulp = require('gulp'),
watch = require('gulp-watch'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
cssImport = require('postcss-import'),
browserSync = require('browser-sync').create();

gulp.task('default', function() {
    console.log("Hooray - you created a Gulp Taks!");
});

/*HTML Task Below*/
gulp.task('html', function() {
    console.log("Image something useful done to your html.");
});

/* CSS Task Below */
gulp.task('styles', function() {
    return gulp.src('./app/assets/styles/styles.css')
        .pipe( postcss([cssImport,cssvars,nested,autoprefixer]) )
        .pipe( gulp.dest('./app/temp/styles') );
});

gulp.task('watch', function() {

    browserSync.init({
        notify: false,
        server: {
            baseDir: "app"
        }
    });

    /*HTML Automation Below*/
    watch('./app/index.html', function() {
        browserSync.reload();
    });

    /*CSS Automation Below*/
    watch('./app/assets/styles/**/*.css', function() {
        gulp.start('cssInject');
    });

});

gulp.task('cssInject', ['styles'], function() {
    return gulp.src('./app/temp/styles/styles.css')
    .pipe(browserSync.stream());
});