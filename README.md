<!-- <!DOCTYPE html> -->
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>reversi</title>
</head>
<style>
    .table {
        width: auto; height: auto;
        border-collapse:collapse;
        border: 1px;
    }
    .table tr tb {
        width: 100px; height: 100px;
        border: 1px;
        background-color: aquamarine;
    }
    .btn {
        width: 95px; height: 95px;
    }
    .stone {
        width: 50px; height: 50px;
        border-radius: 25px;
        background-color: black;
    }
</style>
<body>
    <h1 class="h1">reversi</h1>
    <table class="chessboard">
        <tr>
            <tb class=""><button class="btn" id="btn00"><div class="stone" id="stone00"></div></button></tb>
        </tr>
    </table>
</body>
</html>