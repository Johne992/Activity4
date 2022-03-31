/*
function showMessage(){
  let message = "Hello, I'm JavaScript!"; //local variable
  
  alert(message);
}

showMessage();//Hello, I'm Javascript!

alert(message);

function showMessage(){
  let message = "Happy, After Birthday Party!";
  //local variable//
  alert(message);
}
showMessage();
alert(message);
*/
//<script src="manny.js"></script>
// to add to object index <script src="object_practice/manny.js"></script>



	let manny_userInfo; 
  manny_userInfo= {
 		username:"MothMassacre",
 		firstname:"Manny",
 		lastname:"Patole",
 		id_number: 718,
    moths_killed:314
 		
}
//Welcome to the website,
let manny_FullName = manny_userInfo.firstname + " " + manny_userInfo.lastname;
console.log(manny_userInfo);

console.log("Welcome to the website, " + manny_userInfo.firstname + " "+ manny_userInfo.lastname);

console.log("Welcome to the website, " + " "+ manny_FullName);