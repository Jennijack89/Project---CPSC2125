window.onload = init;
//call addLastUpdate function on load
function init(){ 
    addLastUpdate();
  }

function addLastUpdate(){
  //create date object w/ LastModified function called as a parameter
  const d = new Date(document.lastModified);
  
 //access HTML at the ID and apply the lastmodied date obect in the specified string format
  document.getElementById("modified").innerHTML = "Last modified: " + d.toDateString();
}

//Jquery Slide Function for Page()

/*-----------for Play section Pg1-----------*/
$(document).ready(function(){
  $(".flip").click(function(){
    $(".panel").slideToggle("slow");
  });
});

/*-----------For Active Fun section Pg-1------*/
$(document).ready(function(){
  $(".flip1").click(function(){
    $(".panel1").slideToggle("slow");
  });
});

/*----------For Entertainment section Page1----*/
$(document).ready(function(){
  $(".flip2").click(function(){
    $(".panel2").slideToggle("slow");
  });
});

/*---------------Following Code used on Form Page -----------*/

//when login button is clicked, it will save info to Local storage, hide Sign-up screen, Show a temp sign up message and have an onclick event to hide that display and continue to and show discussion and notes board div's
/*$(document).ready(function(){
  //hides ____ and shows text
  $("#login").click(function(){
    var holdItem = $("#usrName").val();
    localStorage.setItem("Username",holdItem);
    var holdItem1 = $("#email").val();
    localStorage.setItem("Email",holdItem1);
    var holdItem3 = $("#pssWrd").val();
    localStorage.setItem("password",holdItem3);
    $("#login_div").hide();
    alert("Please Save your Username and Password for your records");
    //
    $("#Temp").show(1000, function(){
      $("#tempbtn").click(function(){
        $("#Temp").hide(1000);
        $("#dBoardbox").show();
        $("#notes").show();
        $("#notesBoard").show();
        $("#disBoard").show();
      });
    });   
  });
});*/

//JavaScript Adapted From my Jquery Above - will save in local storage and hide Login Screen

document.getElementById("login").addEventListener("click",SaveDisappear);

function SaveDisappear(){
  
  ;
    var holdItem = document.getElementById("usrName").value;
    localStorage.setItem("Username",holdItem);
    var holdItem2 = document.getElementById("email").value;
    localStorage.setItem("Email",holdItem2);
    var holdItem3 = document.getElementById("email").value;
    localStorage.setItem("pssWrd",holdItem3);
  
    document.getElementById('login_div').style.display = "none";
    alert("Please Save your Username and Password for your records");

    document.getElementById("Temp").style.display = "block";

    
}

//Javascript Adapted from my Jquery Above - will hide tempt page and show the member discussion board pages
document.getElementById("tempbtn").addEventListener("click",Continue);

function Continue(){
    document.getElementById("Temp").style.display = "none";
    document.getElementById("dBoardbox").style.display = "block";
    document.getElementById("notes").style.display = "block";
    document.getElementById("notesBoard").style.display = "block";
    document.getElementById("disBoard").style.display = "block";
}

//This Javascript will display a Signup message to the user with their email and username
let message = "Thank you "+localStorage.getItem("Username")+" for signing up!<br> All correspondence will be sent to "+localStorage.getItem("Email")+".<br> Please press continue to proceed."
  document.getElementById("tempSignup").innerHTML = message;  

//[Jquery] Version of Code below
// On Post button, grabs dicussion text and appends to Dis. Board
/*$(document).ready(function(){
  $("#post").click(function(){
    var hold = $("#dBoard").val();
    hold = "<p>"+localStorage.getItem("Username")+":<br>"+hold+"</p>";
    //alert(hold);
    $("#dBoardPost").append(hold);
  });
});*/


//[Javascript] On click will grad discussion text and append to dis. board
document.getElementById("post").addEventListener("click", PostDiscBValues);

//Adapted from above JQuery code provided by Hillary Fleenor
function PostDiscBValues(){
  var item = document.getElementById("dBoard").value;
  item = "<p>"+localStorage.getItem("Username")+":<br>"+item+" </p>---------------------------------------------------------";
  document.getElementById("dBoardPost").innerHTML += item;//got the (+=) code from ure: https://www.encodedna.com/javascript/append-or-add-text-to-div-using-javascript.htm )
}

//[Jquery] Version of Code Below
//grabs the value of the Notes textarea and appends to the Notes board div
/*  $("#post1").click(function(){
    var hold1 = $("#entrNotes").val();
	hold1 = "<p>"+hold1+"</p>";
	$("#notesBoardpost").append(hold1);
  }); */

//[Javascript] On click will grad Note text and append to Notes in list form
document.getElementById("post1").addEventListener("click", PostNoteVal);


//Adapted from above JQuery code provided by Hillary Fleenor
function PostNoteVal(){
  var noteitem = document.getElementById("entrNotes").value;
  noteitem = "<p>"+" -"+noteitem+"</p>";
  document.getElementById("notesBoardpost").innerHTML += noteitem;//got the (+=) code from url: https://www.encodedna.com/javascript/append-or-add-text-to-div-using-javascript.htm ) /
  localStorage.setItem()
}

//[Javascript to empty the Notes Div on click]
document.getElementById("deleteAll").addEventListener("click", DeleteAll);

function DeleteAll(){
  document.getElementById("notesBoardpost").innerHTML = "";
}



// Thanks for signing up method
/*$(document).ready(function()){

  var message = "<h4> Thank you,"+localStorage.getItem("username")+"!"+"</h4>";
  //ALert Message
  $("# Id where I want to appean").append(message);
  var message = "<p> You will receive messags at: "+localStorage.getItem("email")+"</p>";
  $("# ID where I want to append").append(message);*/


//Validation function - returns true if User and PassWord meet Specs.
//Located - Onsubmit in <Form>
function validateForm(){
  return checkUser() && verifyPw();
}

//Returns true if user is not listed in Array list of name.
//Makes sure user doesn't use existing Username
function checkUser(){
  
  let luserName = localStorage.getItem("username");
  let llowerUserName = luserName.toLowerCase();
  let userName= document.getElementById('usrName').value;
  let lowerUserName = userName.toLowerCase();
  const Unames= [""];
  Unames.append(llowerUserName);
  if(Unames.includes(lowerUserName)){
     alert('Username Exists: Please Choose Another.');
    return false;
  }
  return true;
  let name = document.getElementById("#usrName").value;
  localStorage.setItem("username", name);
}



//Verified re-entered password matches password. returns true if match and false otherwise

function verifyPw(){
  let passWord=document.getElementById('pssWrd').value;
  let rePassWord=document.getElementById('rePssWrd').value;
  if (rePassWord != passWord){
    alert("Password Mismatch: Please re-enter Password");
    return false;
    }
  return true;
  let hold = $("#pssWrd").val();
  localStorage.setItem("password", hold);
  }
  




