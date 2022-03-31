let Alexis_userInfo = {
 first_name: "Alexis", 
 last_name: "Jones", 
 id_number: 21194,
 greeting: function(){
   let Alexis_fullName = this.first_name + " " + this.last_name;
     console.log(Alexis_fullName)
 },
};


Alexis_userInfo.username = "MothQueen11";

console.log(Alexis_userInfo.username)
console.log(Alexis_userInfo["id_number"])

let alexisjones_fullName = (Alexis_userInfo.first_name + " " + Alexis_userInfo.last_name);

console.log("Welcome to the website, "+ alexisjones_fullName)