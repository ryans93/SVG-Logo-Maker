import { Circle, Square, Triangle } from './shapes';
import SVG from './svg';

describe('SVG', () => {
    // Test to verify that the BlogPost class can be instantiated.
    describe('Circle SVG', () => {
        it('should render a red circle with blue text', () => {
            const circle = new Circle('red');
            const svg = new SVG(circle, 'SVG', 'blue');
            expect(svg.render()).toEqual(`<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">' 
        <circle cx="150" cy="100" r="80" fill="red"/>
        <text x="150" y="125" font-family="Verdana" font-size="60" fill="blue" text-anchor="middle">SVG</text></svg>`);
        });
    });

    describe('Square', () => {
        it('should render a blue square with green text', () => {
            const square = new Square('blue');
            const svg = new SVG(square, 'SVG', 'green');
            expect(svg.render()).toEqual(`<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">' 
        <rect width="120" height="120" x="90" y="40" fill="blue"/>
        <text x="150" y="125" font-family="Verdana" font-size="60" fill="green" text-anchor="middle">SVG</text></svg>`);
        });
    });

    describe('Triangle', () => {
        it('should render an indigo triangle with orange text', () => {
            const triangle = new Triangle('indigo');
            const svg = new SVG(triangle, 'SVG', 'orange');
            expect(svg.render()).toEqual(`<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">' 
        <polygon points="150,18 244,182 56,182" fill="indigo"/>
        <text x="150" y="125" font-family="Verdana" font-size="60" fill="orange" text-anchor="middle">SVG</text></svg>`);
        });
    });

});

//
//