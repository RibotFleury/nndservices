<?php
            if (isset($_POST["message"])){
              $message = "Ce message vous a été envoyé via la page donate du site nndservices.com
              Nom: " . $_POST["name"] . "
              Tel: " . $_POST["telephone"] ."
              Email: " . $_POST["email"] . "
              Date-amenagement: " . $_POST["date-demenage"] . "
               PUadress: " . $_POST["PUadress"] . "
                Condition: " . $_POST["condition"] . "
              Message: " . $_POST["message"];

    $retour = mail("fleurytene@gmail.com", $_POST["name"], $message, "From:contact@exemplesite.fr" . "\r\n" . "Reply-to:" . $_POST["email"]);

    if ($retour){
        echo "<p>Votre message a bien été envoyé.</p>";
      }
    }
    ?>