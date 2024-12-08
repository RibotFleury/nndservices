<?php
            if (isset($_POST["message"])){
              $message = "Ce message vous a été envoyé via la page contact du site nndservices.com
              Nom: " . $_POST["name"] . "
              Email: " . $_POST["email"] . "
              Message: " . $_POST["message"];

    $retour = mail("fleurytene@gmail.com", $_POST["subject"], $message, "From:contact@exemplesite.fr" . "\r\n" . "Reply-to:" . $_POST["email"]);

    if ($retour){
        echo "<p>Votre message a bien été envoyé.</p>";
      }
    }
    ?>