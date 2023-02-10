const fs = require("fs");

// creat file

fs.writeFile("welcome.txt", "Hello Node", () => {
  console.log("File Written");
});

//read file

fs.readFile("welcome.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});
