// jQuery 3.x-style ready event and locally scoped $
jQuery(function($) {
  $('html').removeClass('nojs');
  $('html').addClass('hasjs');
});

<script type="text/javascript">
		function validateInfo()
		{
			var name = document.getElementById("fname");
			var ssn = document.getElementById("lname");
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
		}
	</script>
