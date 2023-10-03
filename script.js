function openPopup() {
    document.getElementById("popup").style.display = "block";
  }
  
  function closePopup() {
    document.getElementById("popup").style.display = "none";
  }
  var index = 2;
  var example = document.querySelectorAll(".example")
  function closeGraph() {
    if(index%2!=0){
      document.querySelector(".img-chartt").src="icons/crosewhite.svg";
      document.querySelector(".graphics-table").style.display="block";
      example[0].style.display="flex";
      example[1].style.display="flex";
      index++;
    }
    else{
      document.querySelector(".img-chartt").src="icons/plusewhite.svg";
      document.querySelector(".graphics-table").style.display="none";
      example[0].style.display="none";
      example[1].style.display="none";
      index++;
    }
    
  }
  

   
     
  