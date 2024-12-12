
//getters and setters
//getters
/*---
let obj={
    firstName:"John",
    lastName:"Doe",
    get fullName()
    {
        return `${this.firstName}${this.lastName}`
    }
}
console.log(obj.fullName)
----*/

//setters
/*---
let obj={
    firstName:"John",
    lastName:"Doe",
    set fullName(value){
        const parts=value.split(" ")
        this.firstName=parts[0]
        this.lastName=parts[1]
    }
}

obj.fullName="James Smith"
console.log(obj.firstName)
console.log(obj.lastName)
------*/


//getters and setters using class
/*----example1----
class circle
{
    constructor(radius){
        this.radius=radius
    }
    get diameter(){
        return this.radius*2
    }
    set diameter(diameter)
    {
        this.radius=diameter/2
    }
    get area(){
        return Math.PI*this.radius**2
    }
}
let c1=new circle(2)
console.log(c1.diameter)

c1.diameter=6
console.log(c1.radius)

console.log(c1.area)
------*/

/*------example2
let user={
    pwd:"",
    get password(){
        return this.pwd
    },
    set password(value){
        this.pwd=this.encrypt(value)
    },
    encrypt(value){
        return value.split("").reverse().join("")
    },
    decrypt(value)
    {
        return value.split("").reverse().join("")
    }
}
console.log(user.password)
user.password="securepassword"
console.log(user.password)
console.log(user.decrypt(user.password))
----------*/



//polymorphism
//method overriding
/*----
class Animal
{
    speak()
    {
        return "makes a sound"
    }
}
class Dog extends Animal
{
    speak()
    {
        return "bow bow"
    }
}

class Cat extends Animal
{
    speak()
    {
        return "meow meow"
    }

}
let d1=new Dog()
console.log(d1.speak())
let c1=new Cat()
console.log(c1.speak())
-----*/

/*---dynamic polymorphism---
function polymorphism(animal)
{
    if(typeof animal.speak==='function')
    {
        return animal.speak()
    }
    else
    {
        return "unknown animal"
    }
}
let dog={
    speak()
    {
        return "bow bow"
    }
}

let cat={
    speak()
    {
        return "meow meow"
    }
}

console.log(polymorphism(dog))
console.log(polymorphism(cat))
----*/

//abstraction
/*--using objects and methods

let circle={
    radius:2,
    area:function()
    {
        return Math.PI*this.radius*this.radius
    }
}
console.log(circle.area())
----*/

/*---using functions
function calculate()
{
    this.add=function(a,b)
    {
        return a+b
    }
    this.sub=function(a,b)
    {
        return a-b
    }
}
let a=new calculate()
console.log(a.add(4,3))
console.log(a.sub(5,2))
----*/

/*--using private variables and closures
function counter()
{
    let count=0;
    this.increment=function()
    {
        count++
    }
    this.getCount=function()
    {
        return count
    }
}
let c=new counter()
c.increment()
console.log(c.getCount())
---*/

/*-----using encapsulation 
class Animal
{
    constructor(name,breed)
    {
        this.name=name
        this.breed=breed
    }
    getName()
    {
        return this.name
    }
    setBreed(breed)
    {
        this.breed=breed
    }
}

let a=new Animal("tommy","Dog")
console.log(a.getName())
a.setBreed='buddy'

console.log(a.setBreed)
-----*/