<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>reversi</title>
</head>
<style>
    .board {
        width: auto; height: auto;
        border-collapse:collapse;
        border: 1px;
        text-align: center;
    }
    .board tr tb {
        width: 100px; height: 100px;
        border: 1px;
        background-color: aquamarine;
        text-align: center;
    }
    .btn {
        width: 95px; height: 95px;
        text-align: center;
    }
    .stone {
        width: 50px; height: 50px;
        border-radius: 25px;
        background-color: black;
        text-align: center;
    }
</style>
<body>
    <h1 class="h1">reversi</h1>
    <table class="board">
        <tr>
            <tb class="col0"><button class="btn" id="btn00"><div class="stone" id="stone00"></div></button></tb>
        </tr>
    </table>
</body>
</html>