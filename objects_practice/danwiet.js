console.log("this is dan's js file")

let danwiet_userinfo = {
   first_name: "dan",
   last_name: "wiet",
   id_number: "1235813",
   greeting: function() {
     let fullName = this.first_name + " " + this.last_name
     console.log("Welcome to the website, " + fullName.toUpperCase() + ".")
     },
};

danwiet_userinfo.username = "bobloblaw";

console.log(danwiet_userinfo.username);

console.log(danwiet_userinfo["id_number"]);

// let dw_fullName = danwiet_userinfo.first_name + " " + danwiet_userinfo.last_name
// console.log("Welcome to the website, " + dw_fullName.toUpperCase() + ".")

danwiet_userinfo.greeting();