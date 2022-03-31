let BigDoobie_userInfo;

 BigDoobie_userInfo = {

   first_name: "Alvins",
   last_name: "Cocos",
   id_number: "041991",
   greeting: function(){
    
     let fullname = this.first_name + " " + this.last_name; 
     console.log('hello ' + fullname);
   }
 }
 BigDoobie_userInfo.username = "Boss";
 console.log(BigDoobie_userInfo);

 console.log(BigDoobie_userInfo.id_number);

console.log(BigDoobie_userInfo['first_name']);


BigDoobie_userInfo.greeting();