function hello(name) {
    console.log('Hello, ' + name)

}

hello('World!')

class Person {
    constructor(first, last) {
        this.first = first
        this.last = last
        this.name = function (){
            console.log(this.first + ' ' +this.last)
        }
    }
}

const myHero = new Person('Marcos', "Fonseca")
console.log(myHero)
myHero.name()