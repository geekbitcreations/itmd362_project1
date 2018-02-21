// jQuery 3.x-style ready event and locally scoped $
jQuery(function($) {
  $('html').removeClass('nojs');
  $('html').addClass('hasjs');
});

/*
// Function to validate that the information in the form is filled out.
function validateInfo()
{
  var fname = document.getElementById("fname");
  var lname = document.getElementById("lname");
  var email = document.getElementById("email");
  
  if (document.clubinfo.fname.value == "" ||
      document.clubinfo.fname.value < 4 ||
      document.clubinfo.fname.value > 50)
  {
    alert("Please provide your first name, and must be between 4-50 characters.");
    document.clubinfo.fname.focus();
    return false;
  }
  
  if (document.clubinfo.lname.value == "" ||
      document.clubinfo.lname.value < 4 ||
      document.clubinfo.lname.value > 50)
  {
    alert("Please provide your last name, and must be between 4-50 characters.");
    document.clubinfo.lname.focus();
    return false;
  }
  
  if (document.clubinfo.email.value == "" ||
      document.clubinfo.email.value != "@")
  {
    alert("Please provide your email address.");
    document.clubinfo.email.focus();
    return false;
  }
}*/


document.getElementById("submit").addEventListener("click", confirm);

function confirm(event){
  for(i = 0; i < document.getElementsByTagName("input").length; i++)
  {
    if(document.getElementsByTagName("input").item(i).value === "" ||
        (document.getElementsByTagName("input").item(i).type === "radio" && document.getElementsByTagName("input").item(i).checked===false))
        {
          return false;
        }
  }
  alert("Thank you for signing up for a newsletter!");
  return true;
}

