var json = [{
    "company" : "TATA", 
    "model" : "Nexon",
    "color" : "Red and Blue",
    "mail": "karthicks@eauditoroffice.com",
},
{
    "company" : "Honda", 
    "model" : "Civic",
    "color" : "Red and White",
    "mail": "karthicks@eauditoroffice.com",
}];
//for loop
for(var i = 0; i < json.length; i++) {
    var obj = json[i];

    console.log(obj.company);
    console.log(obj.model);
    console.log(obj.color);
    console.log(obj.mail);

}
//for Each
json.forEach(function(obj) { console.log(obj.model); });

//for In
for (var key in json) {
if (json.hasOwnProperty(key)) {
  console.log(json[key].company);
  
 
}
}
//for Of
let text = "";
for (let x of json[key].company) {
 text += x; 
}
 console.log(text);




