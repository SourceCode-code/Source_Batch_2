// oops --> object oriented programing structure 

/**
 * inheritance
 * abstraction 
 * encapsulation
 * polymorshims
 * prototype 
 */

// where will you use this as automation testor --->
/**
 * This concepts helps you created the better POM (Page object model )frame 
 * this framework can be used in cypress , playwright , selnium , and other tools  
 * 
 * (** in interview they will only ask te theory in rare cases they might ask an example )
 */


//-------------------------------






// -------------------

// overriding --> happens when a subclass or child object provides a new implementaion for a method 
//that is already defined in parent is called as overriding 

class Animal {

    speak() {
        console.log("animal make sound")
    }
}

class dog extends Animal {
    constructor(breed) {
        super(breed)
        this.breed = breed

    }
    speak() {
        console.log("dog barks")
    }



}

let mydog = new dog("lab")

mydog.speak()
console.log(mydog)

// --------------------- overloading 

// overlaoding --> when you define multiple function with same name but different parameter it is called
//as overloading 

// 

function greet(name, age) {

    if (arguments.length === 1) {
        console.log(`hello ${name} !`)

    }
    else if (arguments.length === 2) {
        console.log(`hello ${name} you are ${age} years old`)
    }

}

greet("sid")
greet("sid",26)

