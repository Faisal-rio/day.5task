class Person {
    private name: string;
    private age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    getName(): string {
        return this.name;
    }

    getAge(): number {
        return this.age;
    }

    celebrateBirthday(): void {
        this.age++;
        console.log(`Happy Birthday ${this.name}! You are now ${this.age} years old.`);
    }
}

const person = new Person("Alice", 25);
console.log(`Name: ${person.getName()}`);
console.log(`Age: ${person.getAge()}`);

person.celebrateBirthday();