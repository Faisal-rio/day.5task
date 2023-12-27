class Circle {
    private radius: number;

    constructor(radius: number) {
        this.radius = radius;
    }
    getRadius(): number {
        return this.radius;
    }

    setRadius(radius: number): void {
        this.radius = radius;
    }


    calculateArea(): number {
        return Math.PI * this.radius * this.radius;
    }

    calculateCircumference(): number {
        return 2 * Math.PI * this.radius;
    }
}

const circle = new Circle(5);
console.log("Radius:", circle.getRadius());
console.log("Area:", circle.calculateArea());
console.log("Circumference:", circle.calculateCircumference());
