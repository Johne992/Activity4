let jasmine_userInfo = {
  username: "eatmyshorts",
  first_name: "Jasmine",
  last_name: "Ray",
  id_number: 24,
  greeting: function(){
    let fullname = this.first_name + " " + this.last_name;
    console.log("Welcome to the website," + fullname);
  },
}


console.log( jasmine_userInfo.username );
console.log( jasmine_userInfo['id_number']);

jasmine_userInfo.greeting();