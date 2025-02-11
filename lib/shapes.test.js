import { Circle, Square, Triangle } from './shapes';

describe('Shapes', () => {
    // Test to verify that the BlogPost class can be instantiated.
    describe('Circle', () => {
        it('should render a red circle', () => {
            const circle = new Circle('red');

            expect(circle.render()).toEqual('<circle cx="150" cy="100" r="80" fill="red"/>');
        });
    });

    describe('Square', () => {
        it('should render a blue square', () => {
            const square = new Square('blue');

            expect(square.render()).toEqual(`<rect width="120" height="120" x="90" y="40" fill="blue"/>`);
        });
    });

    describe('Triangle', () => {
        it('should render an indigo triangle', () => {
            const triangle = new Triangle('indigo');

            expect(triangle.render()).toEqual('<polygon points="150,18 244,182 56,182" fill="indigo"/>');
        });
    });

});