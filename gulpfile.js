var gulp = require("gulp");

//Move the development code to the app distribution folder
gulp.task("app", function()
{
   return gulp.src("src/**/*")
       .pipe(gulp.dest("app/www"));
});

//Move the development code to the web distribution folder
gulp.task("web", function()
{
   return gulp.src("src/**/*")
       .pipe(gulp.dest("web"));
});