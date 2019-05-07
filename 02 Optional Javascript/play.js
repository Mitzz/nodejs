const person = {
    name : "mytes",
    greet() {
        console.log("Hi, I'm", this.name)
    }
}

person.greet()

const hobbies = ["Sports", "Cooking"]

const copiedPerson = {...person}
person.name = "mitz"
console.log("Copied Person using spread operator", copiedPerson)