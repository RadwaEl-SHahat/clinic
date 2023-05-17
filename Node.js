const mysql = require('mysql');
const express = require('express');
const app = express();

// Create a MySQL connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Radwa1234',
  database: 'universal clinic'
});

// Connect to the database
connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to the MySQL server');
});

// Create a route to retrieve data from the database
app.get('/data', (req, res) => {
  const sql = 'SELECT * contact';
  connection.query(sql, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
let Name = document.getElementById('Name');
let Email = document.getElementById('Email');
let Message = document.getElementById('Message');
let submit = document.getElementById('submit');


let NameArray =[];
let EmailArray =[];
let MessageArray =[];
//console.log(Name,Email,Message,submit,Contact,location,Hours)
function  submitfeedback(){
let objName={
    Name: Name.value,
};
let objEmail={
    Email: Email.value,
};
let objMessage={
    Message: Message.value
};

NameArray.push(objName);
EmailArray.push(objEmail);
MessageArray.push(objMessage);

console.log(objName);
console.log(objEmail);
console.log(objMessage);
console.log(NameArray);
console.log(EmailArray);
console.log(MessageArray);

}