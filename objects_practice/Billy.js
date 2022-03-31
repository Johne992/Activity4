console.log ("A Message from Billy - Hi");


let billy_userinfo = {
  id_number: 26754,
  first_name: "Billy",
  last_name: "Bob",
  access_level: "Admin",
  username: "eatmyshorts",
  comment: "Temporary User",
  
  greeting: function(){
    let fullname = this.first_name + " " + this.last_name;
    console.log("Nested version of Welcome to the website. " + billy_userinfo.id_number + " people have visited today, get in line");
    console.log(fullname);
},
  
  
}

// Username update to object
billy_userinfo.username = "eatmyshorts1234!";
console.log (billy_userinfo); // all info
//console.log (billy_userinfo.id_number); // userid
//console.log (billy_userinfo['first_name']); // username
console.log ("Welcome to the website. " + billy_userinfo.id_number + " people have visited today, get in line");
let myFirstName = (billy_userinfo.first_name);
//console.log (myFirstName);

billy_userinfo.greeting(); //calls the nested function

