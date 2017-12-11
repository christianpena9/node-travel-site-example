var gulp = require('gulp'),
watch = require('gulp-watch')

gulp.task('default', function() {
    console.log("Hooray - you created a Gulp Taks!");
});

gulp.task('html', function() {
    console.log("Image something useful done to your html.");
});

gulp.task('styles', function() {
    console.log("Image Sass or PostCSS task here.");
});

gulp.task('watch', function() {
    watch('./app/index.html', function() {
        gulp.start('html');
    });

    watch('./app/assets/styles/**/*.css', function() {
        gulp.start('styles');
    });

});