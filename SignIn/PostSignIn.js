function setSession() {
	
if(typeof(Storage)!== "undefined"){
	var email = document.getElementById("txtEmail").value;
sessionStorage.setItem("EmailId", email);

window.open("../Cards/cards.html");
}
else{
alert("Not Supported");
}
}