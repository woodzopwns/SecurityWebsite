<?php

require_once("includes/header.php");

?>		

		<div id="sidenav">
			<h3>How To Choose A Password - Techquickie</h3>
			
			<div class="video-wrapper">
				<div class="video-container">
					<iframe width="1280" height="720" src="https://www.youtube.com/embed/fakbwu5eQTs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
				</div>
			</div>
			
			<small>Video by Techquickie, all credit goes to original owner, available at: https://youtu.be/fakbwu5eQTs</small>
		</div>
		
		<main><!--The main page content -->
			
				<h2>Free Password Checker</h2>
		
			<article>
				<div id="passwordchecker">
					<br>
					<h2>Free Password Checking</h2>
					
					<b><label style="color:BLACK" id="PasswordLabel"> Enter Password Here</labal></b>
					<input type="text" id="password"/>
						<br />
					<progress id="strength"  max="6" value="0" ></progress>
						<br />
					<b><label style="color:BLACK" id="PasswordRating"> Nothing</label></b>
					
					<script type="text/javascript">
					
					var pass = document.getElementById("password")

						pass.addEventListener('keyup', function(){      //Runs the function each time the password is changed so is fluid               
							checkPassword(pass.value)                       //Calls the function to update bar using the password as a constraint
							
						})
						function checkPassword(password) {
							var strengthBar = document.getElementById("strength")
							var strength = 0
							
							if (password.length > 8) {
								strength += 1
							}
							if (password.length > 15) {
								strength += 1
							}
							if (password.match(/[a-z]/)) {
								strength += 1
							}
							if (password.match(/[A-Z]/)) {
								strength += 1
							}
							if (password.match(/[0-9]/)) {
								strength += 1               
							}
							if (password.match(/[!"�$%^&*()_-]|[:;'@#~=+ <>,.?]|[`�]+/)) {
								strength += 1
							}
							strengthBar.value = strength;
							switch (strength) {
								case 0:
									document.getElementById("PasswordRating").style = "color:BLACK"
									document.getElementById("PasswordRating").innerHTML = "Nothing";
									break
								case 1:
									document.getElementById("PasswordRating").style = "color:DARKRED"
									document.getElementById("PasswordRating").innerHTML = "Very Weak";
									break
								case 2:
									document.getElementById("PasswordRating").style = "color:RED"
									document.getElementById("PasswordRating").innerHTML = "Weak";
									break
								case 3:
									document.getElementById("PasswordRating").style = "color:ORANGE"
									document.getElementById("PasswordRating").innerHTML = "Poor";
									break
								case 4:
									document.getElementById("PasswordRating").style = "color:GOLD"
									document.getElementById("PasswordRating").innerHTML = "Good";
									break
								case 5:
									document.getElementById("PasswordRating").style = "color:GREENYELLOW"
									document.getElementById("PasswordRating").innerHTML = "Strong";
									break
								case 6:
									document.getElementById("PasswordRating").style = "color:FORESTGREEN"
									document.getElementById("PasswordRating").innerHTML = "Very Strong";
									break
							}         
						}
				</script>
					
					<br>
					<h2><strong>Good internet practices:</strong></h2>
									
						<p><strong>Passwords:</strong><br>
						Make a strong password - Passwords are used to keep accounts, which hold important information, secure and private to only the user with correct password. 
						You wouldn’t go around giving your house key to other people.
						Your passwords should be strong, poorly protecting your information is almost as bad as not protecting it at all. So, what makes a good password? Well it’s got to be hard to guess or 
						more importantly take a long time for a computer to calculate so It must be long and complex.</p>
						<p><strong>A password should:</strong><br></p>
						
						<ul>
							<li>Be longer than 12 characters (the more the better so long as you remember it!)</li>
							<li>Contain a mixture capital and lowercase letters</li>
							<li>Contain numbers</li>
							<li>Contain special characters or symbols (anything that isn’t a letter)</li>
							<li>Not contain dictionary words as these are easier to guess</li>
							<li>Not use easy to see substitutions e.g. H3ll0 replaces the “e” with “3” and the “o” with “0” to make the word “Hello”</li>
						</ul>
						
						<p>Don’t reuse passwords, use different passwords for different accounts. If a hacker finds a password for a specific site, they will try the password with 
						other sites they may know you use. However, remembering lots of passwords is difficult so its advisable to use a password manager or have a secure place to keep all your passwords
						Lastly, it’s advisable to change passwords semi-regularly, the advice used to be to change each password every month or two however this has fallen out of 
						recommendation. If they are changed every six months there is little chance a password will be stolen. Some password managers automatically change passwords for you 
						so that you don’t have to remember.
						It should go without saying, but don’t tell people your password!</p>
						
						<p><strong>2FA (Two factor authentication):</strong><br>
						Two factor authentication is an extra layer of security implemented after a username and password have been entered, this can come in multiple formats 
						e.g. Text or SMS based where a code is sent to a phone linked to the account meaning the hacker would also need your phone. A similar method can be done with 
						an app which has a code once you open the app.</p>

						<p><strong>General Practices:</strong><br>
						-	Ensure your privacy settings are on and adjusted to share the information you are ok with being seen.
						-	You should be keeping personal and unique details about yourself private as hackers can use this information to impersonate you. Marketing companies can also use similar 
							information to predict your spending habits and advertise accordingly.
						-	Be careful with what you download, make sure it’s coming from a trusted site, as viruses can be hidden within other files (trojans).
						-	Make sure you’re on a secure internet connection and if using a public network its advisable to not use online banking as there is a possibility of hackers watching the network.
						-	Ensure you have up to date security software, antivirus, firewall ect
						</p>
						<br>
				</div>
			</article>
			
		</main><!--Close main page content -->  

		</div><!--Close 'wrapper' div -->
	</body><!--Close 'body' -->
	</html><!--Close 'html' -->