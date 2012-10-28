<?php

  if (!empty($_POST['Name']) && !empty($_POST['Email']) && !empty($_POST['Message'])) {

    $to = 'alfonso@mrkp.co';
    $subject = 'Contact from mrkp.co';
    if (!empty($_POST['City'])) {
      $subject = 'SPAM from mrkp.co';
    }
    $message = "Name: ".$_POST['Name']."\r\nEmail: ".$_POST['Email']."\r\nStatus: ".$_POST['Status']."\r\n\r\nMessage:\r\n".$_POST['Message']."\r\n\r\nSender IP: ".$_SERVER["REMOTE_ADDR"];
    $headers = 'From: '.$_POST['Email']."\r\n".
                'Reply-To: '.$_POST['Email']."\r\n";
    mail($to, $subject, $message, $headers);

    header("Status: 200 OK", true, 200); ?>
    <h1>Successfully sent message</h1>
    <p><a href="http://mrkp.co">Click here</a> to go back to our site.</p> <?php

  } else {

    header("Status: 404 Not Found", true, 404); ?>
    <h1>Error</h1>
    <p>Oh, noes!</p> <?php

  }

?>