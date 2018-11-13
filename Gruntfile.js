module.exports = function(grunt){
    //Configuration
    grunt.initConfig({
        //pass in options to plugins, references to files etc
        pkg:grunt.file.readJSON('package.json'),

        cssmin: {
            combine:{
                files:{
                    "css/main.min.css": ["css/styles.css"]
                }
            }
        },
         concat:{
             css:{
                 src: ['css/style.css'],
                 dest: 'build/style.css'
             }
         }
    });
//Load plugins
grunt.loadNpmTasks('grunt-autoprefixer');
grunt.loadNpmTasks('grunt-contrib-cssmin');


//Register tasks
grunt.registerTask('default', ['cssmin']);

};