const firstName = (firstName) => {
  return firstName.toUpperCase();
};
const lastName = (lastName) => {
  return lastName.toLowerCase();
};
exports.firstName = firstName;
exports.lastName = lastName;

console.log(firstName("your name")); 
console.log(lastName("MY NAME"));

