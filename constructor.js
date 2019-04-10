function SayName(name) {
    this.name = name;
    this.greeting = console.log("Hell, my name is " + name)
}
// This will return "Hello, my name is sally"
const Sally = new SayName("Sally")
