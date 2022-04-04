<?php
//YOU MUST ftp THESE FILES BEFORE YOU CAN SEE THE MAIL ACTUALLY WORK
//declare two empty variables errors and missing requireds will go here later
$errors = [];
$missing = [];
//check if the form has been submitted
if (isset($_POST['send'])) {  
  $to = 'annamkellogg@gmail.com'; //gmail works best
  $subject = 'Comments & Questions from Your Company';
  //list expected fields - to prevent injectors from injecting other fields
  $expected = ['first_name', 'last_name', 'email', 'comments'];
  //set required fields
  $required = ['first_name', 'email', 'comments'];
  //create additional headers
  $headers = "From: AK Designs\r\n"; //carriage return and new line
  $headers .= "Content-Type: text/plain; charset=utf-8"; //.= concatenates from last line
  require 'processmail.php';
  if ($mailSent) {
      //next line sends them to thank you page when mail was sent successfully
      header('Location: https://amkellogg.github.io/wdd230/Final/ak-thankyou.html');
      exit;
  }
}
?>
<!DOCTYPE html>
<html>
<head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="ak.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400&display=swap"
            rel="stylesheet"
        />
        <link rel="shortcut icon" type="image/x-icon" href="images/ABfavicon.ico" />
        <script src="ak.js" defer></script>

        <title>Contact</title>
    </head>

  <body>
  <header>
            <div class="logo">
                <img src="images/Alogo.png" alt="logo" />
            </div>
            <div class="navigation">
                <nav class="navbar">
                    <a href="https://amkellogg.github.io/wdd230/Final/ak-projects.html"
                        >Projects</a
                    >
                    <a href="https://amkellogg.github.io/wdd230/Final/ak-about.html"
                        >About</a
                    >
                    <a href="https://amkellogg.github.io/wdd230/Final/ak.php"
                        >Contact</a
                    >
                    <a href="https://amkellogg.github.io/wdd230/Final/ak-services.html"
                        >Services</a
                    >
                    <a href="https://amkellogg.github.io/wdd230/Final/ak-otherwork.html"
                        >Other Work</a
                    >
                </nav>
                <div class="menuBar" onclick="show(this)">
                    <div class="bar1"></div>
                    <div class="bar2"></div>
                    <div class="bar3"></div>
                </div>
            </div>
        </header>
      <main>
            <!--PHP for showing msg if missing info from form-->
            <?php if (($_POST && $suspect) || ($_POST && isset($errors['mailfail']))) { ?>
              <p class="warning">Sorry, your mail could not be sent. Please try later.</p>
            <?php } elseif ($missing || $errors) { ?>
              <p class="warning">Please fix the items(s) indicated.</p>
            <?php } ?>
            <!-- end of warning -->
            <h1>Contact Me</h1>
            <p>Feel free to contact me if you have any questions!</p>
            <form
            action="https://amkellogg.github.io/wdd230/Final/processmail.php"
                method="mail"
            >         
              <!--PHP within the label tag is backend validation for required info from user-->
              <label for="first_name">First Name *:
              <?php if ($missing && in_array('first_name', $missing)) { ?>
                <span class="warning">Please enter your first name</span>
              <?php } ?>
              </label>
             
              <!--PHP within the input tag makes form sticky (redisplays values)-->
              <input name="first_name" type="text" id="first_name" 
                <?php if ($missing || $errors) {
                echo 'value="' . htmlentities($first_name). '"';
                } ?>
                >   <!--this ending angle bracket closes the input tag-->
             
              <label for="last_name">Last Name:
              <?php if ($missing && in_array('last_name', $missing)) { ?>
                <span class="warning">Please enter your last name</span>
              <?php } ?>
              </label>
              <input name="last_name" type="text" id="last_name" 
              <?php if ($missing || $errors) {
                echo 'value="' . htmlentities($last_name). '"';
                } ?>
                >

              <label for="email">E-mail *:
              <?php if ($missing && in_array('email', $missing)) { ?>
                <span class="warning">Please enter your e-mail</span>
              <?php } elseif (isset($errors['email'])) { ?>
                <span class="warning">Invalid email address</span>
              <?php } ?> <!--different warning if email doesn't validate-->
              </label>
     
              <input name="email" type="text" id="email"
              <?php if ($missing || $errors) {
                echo 'value="' . htmlentities($email).'"';
              } ?>
              >

              <label for="comments">Comment/Question/Message *:
              <?php if ($missing && in_array('comments', $missing)) { ?>
                <span class="warning">Please enter your comment, questions or message</span>
              <?php } ?>
              </label>
 
              <textarea name="comments"  id="comments">
              <?php
              if ($missing || $errors) {
                echo htmlentities($comments);
              } ?>
              </textarea>
              <input id="date" type="hidden" name="todayDate" value="" />

              <div id="btns">
                <input type="submit" name="send" id="submit" value="Send">
                <input type="reset"  value="Reset"></td>
              </div>
        </form>
        <footer class="footer">
            <div class="footerImages">
                <a href="https://www.linkedin.com/in/anna-kellogg-9553121b6/">
                    <img src="images/linkedin.png" alt="linkedin" />
                </a>
                <a href="instagram.com">
                    <img src="images/instagram.png" alt="instagram" />
                </a>
                <p class="footerInfo">Anna Kellogg | 2022</p>
            </div>
            </main>
        </footer>
  </body>
</html>