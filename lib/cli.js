import inquirer from 'inquirer';
import colorString from 'color-string';

class CLI {
    constructor() {
    }

    run() {
        inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'text',
                    message: 'Enter logo text (max 3 characters)',
                    validate: function (value) {
                        if (value.length > 3) {
                            return 'Please enter a maximum of 3 characters';
                        }
                        return true;
                    }
                },
                {
                    type: 'input',
                    name: 'textColor',
                    message: 'Enter text color',
                    validate: function (value) {
                        if (colorString.get(value) === null) {
                            return 'Please enter a valid color';
                        }
                        return true;
                    }
                },
                {
                    type: 'list',
                    name: 'shape',
                    message: 'Pick a shape',
                    choices: ['Square', 'Circle', "Triangle"]
                },
                {
                    type: 'input',
                    name: 'shapeColor',
                    message: 'Enter shape color',
                    validate: function (value) {
                        if (colorString.get(value) === null) {
                            return 'Please enter a valid color';
                        }
                        return true;
                    }
                },
            ])
            .then((answers) => {
                // Use user feedback for... whatever!!
            })
            .catch((error) => {
                throw new Error(error);
            });
    }
}

module.exports = CLI;