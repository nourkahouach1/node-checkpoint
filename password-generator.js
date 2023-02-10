const generatePassword = require("generate-password");

const password = generatePassword.generate({
  length: 10,
  numbers: true,
  symbols: false,
  uppercase: true,
});

console.log(password);
