class Shape {
    constructor(color) {
       this.color = color;
    }
}

class Square extends Shape {
    constructor(color) {
        super(color)
    }

    render(){
        return `<rect width="120" height="120" x="90" y="40" fill="${this.color}"/>`
    }
}

class Circle extends Shape {
    constructor(color) {
        super(color)
    }
    render(){
        return `<circle cx="150" cy="100" r="80" fill="${this.color}"/>`
    }
}

class Triangle extends Shape {
    constructor(color) {
        super(color)
    }
    render(){
        return `<polygon points="150,18 244,182 56,182" fill="${this.color}"/>`
    }
}

export {Circle, Square, Triangle}