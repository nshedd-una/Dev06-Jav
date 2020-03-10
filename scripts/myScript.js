$(document).ready(function(){
  console.log('in doc ready f/n')
  
 
   
  //var el = document.getElementById("card-spot");
  //console.log(el); 
  //el.appendChild(bsCardTemplate); 
  
  //code to create a bs card
  //code to add contents to card
  
  var elBtn = document.getElementsByTagName("button"); 
  console.log(elBtn[0]);
  elBtn[0].onclick = function(){
     createBSCard(getCardInput()); 
 };
  
}); 
//code to get input contents
function getCardInput() {
  var elInput = document.getElementById("card-input");
  return elInput.value;
}
function createBSCard(cardText) {
  
  var str= cardText;

  var charLength= (str.replace(/[^A-Z]/gi, "").length);
  
  var bsCardTemplate= document.createElement("div");
  bsCardTemplate.innerHTML = '<div class="card col-md-4"><div class="card-body">  <h5 class="card-title">'+cardText+'</h5><h6 class="card-subtitle mb-2 text-muted">Length of name</h6>  <p class="card-text">'+charLength+'</p>  </div> </div>';  
  
 
  
  document.body.appendChild(bsCardTemplate);    
  
  
}