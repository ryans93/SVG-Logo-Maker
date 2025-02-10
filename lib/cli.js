import inquirer from 'inquirer';
import colorString from 'color-string';
import { Square, Triangle, Circle } from './shapes.js';
import SVG from './svg.js';
import fs from 'fs';

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
                let logo;
                switch (answers.shape) {
                    case 'Square':
                        logo = new SVG(new Square(answers.shapeColor), answers.text, answers.textColor);
                        break;
                    case 'Circle':
                        logo = new SVG(new Circle(answers.shapeColor), answers.text, answers.textColor);
                        break;
                    case 'Triangle':
                        logo = new SVG(new Triangle(answers.shapeColor), answers.text, answers.textColor);
                        break;
                    default:
                        throw new Error('Invalid shape');
                }
                fs.writeFile('./examples/logo.svg', logo.render(), (err) => {
                    if (err) throw new Error(err);
                    console.log("Generated logo.svg");
                });
            })
            .catch((error) => {
                throw new Error(error);
            });
    }
}

export default CLI;

