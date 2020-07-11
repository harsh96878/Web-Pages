$(document).ready(function(){
    $('.menu-toggler').click(function(){
      $(this).toggleClass("active");
      $(".navbar-menu").toggleClass("active");
    });
  })

  function ValidateEmail(mail) 
    {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
        {
            return (true)
        }
            alert("You have entered an invalid email address!")
            return (false)
        }
        function check_Function() {
            const name = document.getElementById("nameBox").value.trim();
            const email = document.getElementById("emailBox").value.trim();
            const subject = document.getElementById("subjectBox").value.trim();
            const message = document.getElementById("messageBox").value.trim();
                        
                         
            if(name.length === 0 || email.length === 0 || subject.length === 0 || message.length === 0 ) {
                alert("Error !! Dont leave any field empty");
            }
            else if (ValidateEmail(email)) { 
                if(name.length != 0 && email.length != 0 && subject.length != 0 && message.length != 0 ) {
                        alert("Submitted Successfully !!");
                }
            }
            }