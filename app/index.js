'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');

var PintxosGenerator = yeoman.generators.Base.extend({
  initializing: function () {
    this.pkg = require('../package.json');
  },

  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the astonishing Pintxos generator!'
    ));

    var prompts = [{
      type: 'input',
      name: 'componentName',
      message: 'What is the name of the Pintxos component you are about to start building?',
      default: this.appname
    }, {
      type: 'input',
      name: 'author',
      message: 'Could you tell me the author\'s name?'
    }, {
      type: 'input',
      name: 'email',
      message: 'Can I also get his or her e-mail address?'
    }];

    this.prompt(prompts, function (props) {

      this.tplData = {
        componentName: props.componentName,
        packageName: 'pintxos-' + props.componentName.toLowerCase(),
        author: props.author,
        email: props.email
      };

      done();

    }.bind(this));
  },

  writing: {
    app: function () {

      this.dest.mkdir('test');

      this.src.copy('_.travis.yml', '.travis.yml');

      this.template('_index.js', 'index.js', this.tplData);
      this.template('_README.md', 'README.md', this.tplData);
      this.template('_bower.json', 'bower.json', this.tplData);
      this.template('_package.json', 'package.json', this.tplData);
      this.template('_Gruntfile.js', 'Gruntfile.js', this.tplData);

    },
  },

  end: function () {
    this.installDependencies();
  }
});

module.exports = PintxosGenerator;
