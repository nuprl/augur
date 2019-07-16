module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    babel: {
      options: {
          presets: ['es2015']
      },
      dist: {
        files: {
          'dist/index.js': 'src/index.js',
          'dist/bin/wos.js': 'src/bin/wos.js'
        }
      }
    },

    watch: {
      scripts: {
  	    files: ['src/**/*.js'],
  	    tasks: ['babel']
      }
    }
  });

  grunt.loadNpmTasks('grunt-babel');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['babel']);
  grunt.registerTask('dev', ['babel', 'watch']);
};
