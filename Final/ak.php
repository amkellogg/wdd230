<?php
//YOU MUST ftp THESE FILES BEFORE YOU CAN SEE THE MAIL ACTUALLY WORK
//declare two empty variables errors and missing requireds will go here later
$errors = [];
$missing = [];
//check if the form has been submitted
if (isset($_POST['send'])) {  
  $to = 'julieannidaho@gmail.com'; //gmail works best
  $subject = 'Comments & Questions from Your Company';
  //list expected fields - to prevent injectors from injecting other fields
  $expected = ['first_name', 'last_name', 'email', 'comments'];
  //set required fields
  $required = ['first_name', 'email', 'comments'];
  //create additional headers
  $headers = "From: YourCompany\r\n"; //carriage return and new line
  $headers .= "Content-Type: text/plain; charset=utf-8"; //.= concatenates from last line
  require 'processmail.php';
  if ($mailSent) {
      //next line sends them to thank you page when mail was sent successfully
      header('Location: http://www.ceiwebdev.com/thankyou.html');
      exit;
  }
}
?>
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8"> 
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <title>PHP Sample Form - to Email</title>
    <style>
      form {
      width: 50%;
      margin: 0 auto;
      }
      textarea {
          width: 80%;
          height: 275px;
      }
      input, label {
          display: block;
          line-height: 1.5em;
          font-size: 1.1em;
          width: 80%;
          padding-top: 10px;
      }
      input[type='submit'], input[type='reset'] {
          margin: 2%;
          padding: 1%;
          border: 1px solid black;
          color: #000;
          font-size: 1.2em;
          width: 80px;
          height: 40px;
      }
      #btns {
        display: flex;
      }
      .warning {
        color: red;
      }
    </style>
  </head>
  <body>
            <!--PHP for showing msg if missing info from form-->
            <?php if (($_POST && $suspect) || ($_POST && isset($errors['mailfail']))) { ?>
              <p class="warning">Sorry, your mail could not be sent. Please try later.</p>
            <?php } elseif ($missing || $errors) { ?>
              <p class="warning">Please fix the items(s) indicated.</p>
            <?php } ?>
            <!-- end of warning -->

        <form action="" method="post"> <!-- remember method post is more secure for forms "get" leaves data exposed-->
         
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

              <label for="comments">Comment/Question *:
              <?php if ($missing && in_array('comments', $missing)) { ?>
                <span class="warning">Please enter your comment or question</span>
              <?php } ?>
              </label>
 
              <textarea name="comments"  id="comments">
              <?php
              if ($missing || $errors) {
                echo htmlentities($comments);
              } ?>
              </textarea>
              <div id="btns">
                <input type="submit" name="send" id="submit" value="Send">
                <input type="reset"  value="Reset"></td>
              </div>
        </form>
  </body>
</html>