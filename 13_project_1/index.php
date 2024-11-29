<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
    <script src="index.js" defer></script>
</head>

<body>
    <?php
    $success = true;
    try {
        $db = new mysqli(
            "127.0.0.1",
            "paszport1",
            "Paszport2024",
            "paszport1"
        );
    } catch (Exception $e) {
        $success = false;
        ?>
        <p class="error">Błąd połączenia z bazą danych: <?= $e ?></p>
        <?php
    }

    if ($success) {
        ?>
        <p class="success">Połączono z bazą danych paszport1.</p>
        <?php
    }

    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $pesel = $_POST["pesel"];
        $firstname = $_POST["firstname"];
        $lastname = $_POST["lastname"];
        $color = $_POST["color"];

        $success = true;
        try {
            $db->query("INSERT INTO paszporty VALUES ('$pesel', '$firstname', '$lastname', '$color');");
        } catch (Exception $e) {
            $success = false;
            ?>
            <p class="error">Błąd wstawiania danych: <?= $e ?></p>
            <?php
        }

        if ($success) {
            ?>
            <ul>
                <li><?= $pesel ?></li>
                <li><?= $firstname ?></li>
                <li><?= $lastname ?></li>
                <li><?= $color ?></li>
            </ul>
            <?php
        }
    }
    ?>


    <form action="index.php" method="post">
        <table>
            <tr>
                <td>
                    <label for="pesel">PESEL</label>
                </td>
                <td>
                    <input type="text" name="pesel" id="pesel" autofocus>
                </td>
            </tr>
            <tr>
                <td>
                    <label for="firstname">Imie</label>
                </td>
                <td>
                    <input type="text" name="firstname" id="firstname">
                </td>
            </tr>
            <tr>
                <td>
                    <label for="lastname">Nazwisko</label>
                </td>
                <td>
                    <input type="text" name="lastname" id="lastname">
                </td>
            </tr>
            <tr>
                <td colspan="2">
                    <fieldset>
                        <legend>Kolor oczu</legend>

                        <input type="radio" name="color" id="color_blue" value="0">
                        <label for="color_blue">niebieskie</label>
                        <br>

                        <input type="radio" name="color" id="color_green" value="1">
                        <label for="color_green">zielone</label>
                        <br>

                        <input type="radio" name="color" id="color_beer" value="2">
                        <label for="color_beer">piwne</label>
                    </fieldset>
                </td>
            </tr>
            <tr>
                <td colspan="2">
                    <input type="submit" value="Zapisz">
                </td>
            </tr>
        </table>
    </form>
</body>

</html>