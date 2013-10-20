module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    cssmin: {
        minify: {
          expand: true,
          src: ['css/*.css'],
          dest: 'cssbuild/',
          ext: '.min.css'
        }
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
      },
      dist: {
        files: {
          'dist/<%= pkg.name %>.min.js': [
          'lib/fleximg/bower_components/jquery/jquery.min.js',
          'lib/fleximg/bower_components/hammerjs/dist/jquery.hammer.js',
          'lib/fleximg/scale.js',
          'js/scale_init.js',
          'js/vendor/bootstrap.min.js',
          'js/main.js'
          ]
        }
      }
    },concat: {
    basic_and_extras: {
        files: {
          'dist/all.css': ['cssbuild/css/*.css'],
        },
      },
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-concat');

  grunt.registerTask('build', ['cssmin','concat','uglify']);

};