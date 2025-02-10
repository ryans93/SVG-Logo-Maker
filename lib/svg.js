class SVG {
    constructor(shape, text, color) {
        this.width = 300;
        this.height = 200;
        this.text = `<text x="150" y="125" font-family="Verdana" font-size="60" fill="${color}" text-anchor="middle">${text}</text>`
        this.shape = shape
    }

    render() {
        return `<svg width="${this.width}" height="${this.height}" xmlns="http://www.w3.org/2000/svg">' 
        ${this.shape.render()}
        ${this.text}</svg>`;
    }
}

export default SVG;