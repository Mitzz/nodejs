const person = {
    name : "mytes",
    greet() {
        console.log("Hi, I'm", this.name)
    }
}

person.greet()