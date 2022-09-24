<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Reversi</title>
</head>
<style>
  h1 {
    font-size: 50px;
    text-align: center;
  }
  table {
    margin: auto;
    border: solid 3px;
    border-collapse: collapse;
  }
  table th,
  table td {
    width: 60px; height: 60px;
    border: solid 3px #000;
    text-align: center;
  }
  button {
    background-color: rgb(182, 230, 200);
    border: none;
    color: white;
    padding: 20px 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    cursor: pointer;
    z-index:100;
  }
  /*button:hover {
    background-color: #4CAF50;
  } */
  div{
    float: left;
    z-index:-100;
    width: 50px;
    height: 50px;
    border-radius: 25px;
    background-color: rgb(182, 230, 200);
  }
  .btn33{
    background-color: white;
  }
  .btn44{
    background-color: white;
  }
  .btn34{
    background-color: black;
  }
  .btn43{
    background-color: black;
  }
</style>
<body>
  <h1>Reversi</h1>
  <table>
    <tbody>
      <tr>
          <td></td>
          <td>a</td>
          <td>b</td>
          <td>c</td>
          <td>d</td>
          <td>e</td>
          <td>f</td>
          <td>g</td>
          <td>h</td>
      </tr>
      <tr>
          <td>1</td>
          <td><button onclick="btnOnclick(0,0)" ><div id="btn00"></div></button></td>
          <td><button onclick="btnOnclick(0,1)" ><div id="btn01"></div></button></td>
          <td><button onclick="btnOnclick(0,2)" ><div id="btn02"></div></button></td>
          <td><button onclick="btnOnclick(0,3)" ><div id="btn03"></div></button></td>
          <td><button onclick="btnOnclick(0,4)" ><div id="btn04"></div></button></td>
          <td><button onclick="btnOnclick(0,5)" ><div id="btn05"></div></button></td>
          <td><button onclick="btnOnclick(0,6)" ><div id="btn06"></div></button></td>
          <td><button onclick="btnOnclick(0,7)" ><div id="btn07"></div></button></td>
      </tr>
      <tr>
          <td>2</td>
          <td><button onclick="btnOnclick(1,0)" ><div id="btn10"></div></button></td>
          <td><button onclick="btnOnclick(1,1)" ><div id="btn11"></div></button></td>
          <td><button onclick="btnOnclick(1,2)" ><div id="btn12"></div></button></td>
          <td><button onclick="btnOnclick(1,3)" ><div id="btn13"></div></button></td>
          <td><button onclick="btnOnclick(1,4)" ><div id="btn14"></div></button></td>
          <td><button onclick="btnOnclick(1,5)" ><div id="btn15"></div></button></td>
          <td><button onclick="btnOnclick(1,6)" ><div id="btn16"></div></button></td>
          <td><button onclick="btnOnclick(1,7)" ><div id="btn17"></div></button></td>
      </tr>
      <tr>
          <td>3</td>
          <td><button onclick="btnOnclick(2,0)" ><div id="btn20"></div></button></td>
          <td><button onclick="btnOnclick(2,1)" ><div id="btn21"></div></button></td>
          <td><button onclick="btnOnclick(2,2)" ><div id="btn22"></div></button></td>
          <td><button onclick="btnOnclick(2,3)" ><div id="btn23"></div></button></td>
          <td><button onclick="btnOnclick(2,4)" ><div id="btn24"></div></button></td>
          <td><button onclick="btnOnclick(2,5)" ><div id="btn25"></div></button></td>
          <td><button onclick="btnOnclick(2,6)" ><div id="btn26"></div></button></td>
          <td><button onclick="btnOnclick(2,7)" ><div id="btn27"></div></button></td>
      </tr>
      <tr>
          <td>4</td>
          <td><button onclick="btnOnclick(3,0)" ><div id="btn30"></div></button></td>
          <td><button onclick="btnOnclick(3,1)" ><div id="btn31"></div></button></td>
          <td><button onclick="btnOnclick(3,2)" ><div id="btn32"></div></button></td>
          <td><button onclick="btnOnclick(3,3)" ><div id="btn33" class="btn33"></div></button></td>
          <td><button onclick="btnOnclick(3,4)" ><div id="btn34" class="btn34"></div></button></td>
          <td><button onclick="btnOnclick(3,5)" ><div id="btn35"></div></button></td>
          <td><button onclick="btnOnclick(3,6)" ><div id="btn36"></div></button></td>
          <td><button onclick="btnOnclick(3,7)" ><div id="btn37"></div></button></td>
      </tr>
      <tr>
          <td>5</td>
          <td><button onclick="btnOnclick(4,0)" ><div id="btn40"></div></button></td>
          <td><button onclick="btnOnclick(4,1)" ><div id="btn41"></div></button></td>
          <td><button onclick="btnOnclick(4,2)" ><div id="btn42"></div></button></td>
          <td><button onclick="btnOnclick(4,3)" ><div id="btn43" class="btn43""></div></button></td>
          <td><button onclick="btnOnclick(4,4)" ><div id="btn44" class="btn44"></div></button></td>
          <td><button onclick="btnOnclick(4,5)" ><div id="btn45"></div></button></td>
          <td><button onclick="btnOnclick(4,6)" ><div id="btn46"></div></button></td>
          <td><button onclick="btnOnclick(4,7)" ><div id="btn47"></div></button></td>
      </tr>
      <tr>
          <td>6</td>
          <td><button onclick="btnOnclick(5,0)" ><div id="btn50"></div></button></td>
          <td><button onclick="btnOnclick(5,1)" ><div id="btn51"></div></button></td>
          <td><button onclick="btnOnclick(5,2)" ><div id="btn52"></div></button></td>
          <td><button onclick="btnOnclick(5,3)" ><div id="btn53"></div></button></td>
          <td><button onclick="btnOnclick(5,4)" ><div id="btn54"></div></button></td>
          <td><button onclick="btnOnclick(5,5)" ><div id="btn55"></div></button></td>
          <td><button onclick="btnOnclick(5,6)" ><div id="btn56"></div></button></td>
          <td><button onclick="btnOnclick(5,7)" ><div id="btn57"></div></button></td>
      </tr>
      <tr>
          <td>7</td>
          <td><button onclick="btnOnclick(6,0)" ><div id="btn60"></div></button></td>
          <td><button onclick="btnOnclick(6,1)" ><div id="btn61"></div></button></td>
          <td><button onclick="btnOnclick(6,2)" ><div id="btn62"></div></button></td>
          <td><button onclick="btnOnclick(6,3)" ><div id="btn63"></div></button></td>
          <td><button onclick="btnOnclick(6,4)" ><div id="btn64"></div></button></td>
          <td><button onclick="btnOnclick(6,5)" ><div id="btn65"></div></button></td>
          <td><button onclick="btnOnclick(6,6)" ><div id="btn66"></div></button></td>
          <td><button onclick="btnOnclick(6,7)" ><div id="btn67"></div></button></td>
      </tr>
      <tr>
          <td>8</td>
          <td><button onclick="btnOnclick(7,0)" ><div id="btn70"></div></button></td>
          <td><button onclick="btnOnclick(7,1)" ><div id="btn71"></div></button></td>
          <td><button onclick="btnOnclick(7,2)" ><div id="btn72"></div></button></td>
          <td><button onclick="btnOnclick(7,3)" ><div id="btn73"></div></button></td>
          <td><button onclick="btnOnclick(7,4)" ><div id="btn74"></div></button></td>
          <td><button onclick="btnOnclick(7,5)" ><div id="btn75"></div></button></td>
          <td><button onclick="btnOnclick(7,6)" ><div id="btn76"></div></button></td>
          <td><button onclick="btnOnclick(7,7)" ><div id="btn77"></div></button></td>
      </tr>

    </tbody>
  </table>
  <script src="main.js"></script>
</body>
</html>
