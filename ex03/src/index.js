// only change code below this line
class Person {
  static display(message) {
    return message;
  }
  show() {
    console.log(
      this.constructor.display("Static method is invoked from Person class")
    );
  }
}
// Only change code above this line
var message = new Person();
message.show();
module.exports = Person;
