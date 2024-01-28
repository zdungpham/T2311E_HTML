<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Fjalla+One&family=Gothic+A1:wght@300&family=Grandstander:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=PT+Serif:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="css/layout.css"/>
    <?php include ("html/css.html");?>
    
</head>
<body>
    <main class="section main">
        <div class="container">
           <h1> Demo JS 2s </h1>
           <ul id="number"> 10 </ul>
           <h2 id="timer"><span id="timer1">10</span>:<span id="timer2">00</span></h2>
           <div id="quay">
            <img src="/images/fan.png" ></div>
           <style>
            #quay{
                width: 450px;
                height: 450px;
                float: left;
                //background-color: blue;
                background-image: url(images/fan.png);
                background-size: cover;
                margin: 300px;
            }
        </style>
    </main>
   <script type="text/javascript" src="js/demo2.js"></script>
</body>
</html>