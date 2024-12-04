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
            "salon1",
            "salon",
            "salon1"
        );
    } catch(Exception $e) {
        $success = false;
        ?>
        Błąd połączenia z bazą danych: <?= $e ?>
        <?php
    }

    if($success) {
        ?>
        <mark>Połączono</mark>
        <?php
    }

    $model_id = $_GET["id"] ?? 2;
    ?>
    <header>
        <img src="images/baner.jpg">
    </header>
    <main>
        <section class="lewy">
            <hr>
            <h2>Kolor</h2>
            <select id="color">
                <option value="0" selected>szary</option>
                <option value="1">niebieski</option>
                <option value="2">czerwony</option>
                <option value="3">żółty</option>
                <option value="4">zielony</option>
            </select>
            <h2>Model</h2>
            <form action="" method="get" id="modelform">
                <select id="model" name="id">
                    <option></option>
                    <?php
                    $query = $db->query("SELECT id, marka, model, rocznik FROM modele ORDER BY marka, model, rocznik;");
                    while($row = $query->fetch_assoc()) {
                    ?>
                        <option value="<?=$row["id"]?>" <?=$model_id == $row["id"] ? "selected" : ""?>><?=$row["marka"]?> <?=$row["model"]?> <?=$row["rocznik"]?></option>
                    <?php
                    }
                    ?>
                </select>
            </form>
            <hr>
        </section>
        <section class="prawy">
            <h1>Twój samochód</h1>
            <img src="images/szary.png" id="prev">
            <hr>
            <h1>Model</h1>
            <?php
                $query = $db->query("SELECT marka, model, cena FROM modele WHERE id = $model_id");
                $data = $query->fetch_assoc();
                ?>
            <table>
                <tr>
                    <td><?=$data["marka"]?> <?=$data["model"]?></td>
                    <td><?=$data["cena"]?> zł</td>
                </tr>
            </table>
            <h1>Wyposażenie dodatkowe</h1>
            <table>
            <?php
            $query = $db->query("SELECT doposazenie, doplata FROM doposazenie WHERE modele_id = $model_id");
            $ok = false;
            while($row = $query->fetch_assoc()) {
                $ok = true;
                ?>
                    <tr>
                        <td><?=$row["doposazenie"]?></td>
                        <td><?=$row["doplata"]?> zł</td>
                    </tr>
                <?php
            }
            ?>
            </table>
            <?php
            if(!$ok) {
                ?>
                <p>Ten model nie posiada dodatkowego wyposażenia</p>
                <?php
            }
            ?>
        </section>
    </main>
    <footer>
        <p>Autor strony <i>Jakub Sakra</i></p>
    </footer>
    <?php
    $db->close();
    ?>
</body>
</html>