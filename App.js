function change(){
  
  function popup(){
     document.querySelector("#form-section").style.display = "none";
 document.querySelector("#pop-up").style.display = "block";
  
  document.querySelector("body").style.background = "url('https://s-media-cache-ak0.pinimg.com/originals/a3/03/d0/a303d0d7d53ccb6f87cd36fd788d925e.jpg')";
  
  document.querySelector("body").style.backgroundRepeat = "no-repeat";
  document.querySelector("body").style.backgroundSize = "cover";
  
  var x = document.querySelector(".username").value;
   document.querySelector("#pop-up").innerHTML = "Hello <i>" + x + "</i>.<br>Hope you're having an amazing day!";
  }
  var x = document.querySelector(".username").value;
          var y = document.querySelector(".password").value;
           

          if(x=="" || x=="undefined" || y=="" || y=="undefined"){
              alert("OOOPS!!..you forgot to enter your Username & password.");  
          }
          else{
           popup();
     }
        
}