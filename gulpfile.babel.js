var gulp = require ('gulp');
var connect = require ('gulp-connect');
var browserify = require ('browserify');
var watchify = require ('watchify');
var stringify = require ('stringify');
var babelify    = require ('babelify');
var source = require ('vinyl-source-stream');
var autoprefixer = require ('gulp-autoprefixer');
var concat = require ('gulp-concat');
var sass = require ('gulp-sass');

const autoprefixerOptions = {
    browsers: [
        "Android 2.3",
        "Android >= 4",
        "Chrome >= 20",
        "Firefox >= 24",
        "Explorer >= 8",
        "iOS >= 6",
        "Opera >= 12",
        "Safari >= 6"
    ]
};

gulp.task('connect', () => {
    connect.server({
        root: './',
        port: 8000,
        livereload: true
    });

});

gulp.task('html', function () {
  gulp.src('./*')
    .pipe(connect.reload());
});

gulp.task('js', function () {
  gulp.src('./dist/js/bundle.js')
    .pipe(connect.reload());
});

gulp.task('watch', function () {
  gulp.watch(['./*'], ['html']);
  gulp.watch(['./dist/js/bundle.js'], ['js'])
});

gulp.task('bundle', () => {
    let b = browserify({
        entries : ['./app/app.js'],
        cache : {},
        packagecache : {},
        plugin: watchify

    })

    .transform(stringify, {
        appliesTo : {
            includeExtensions : ['.html'],
            minify : true
        }
    })
    .transform(babelify, {
        presets : ['es2015']
    })

    b.on('update', bundle);
    bundle();

    function bundle() {
        console.log("I'm rebundling...");
        b.bundle()
        .on('error', function(err){
            console.log(err.message);
            this.emit('end');
        })
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('dist/js/'))
    }
});

gulp.task('sass', () => {
    return gulp.src('./app/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer(autoprefixerOptions))
    .pipe(concat('main.css'))
    .pipe(gulp.dest('./dist/css/'))
});

gulp.task('css', function() {
    gulp.watch('app/**/*.scss', ['sass']);
})


gulp.task('default', ['connect', 'watch', 'bundle', 'css']);
