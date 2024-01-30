<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    
</head>
<body>
    <main class="section main">
        <div class="container">
           <button type="button" onclick="fan()"> 01 </button>
           <button type="button" onclick="fan()"> 02 </button>
           <button type="button" onclick="fan()"> 03 </button>
           <button type="button" onclick="stopFan()"> Stop </button>
           <div id="fan" onmouseenter="fan()" onmouseleave="stopFan()">
            <!-- <img src="/images/fan.png" /> -->
            </div>
        </div>
    </main>
    <script type="text/javascript" src="js/demo3.js"></script>
           <style>
            #fan{
                width: 450px;
                height: 450px;
                float: left;
                /*background-color: blue;*/
                background-image: url(images/fan.png);
                background-size: cover;
                margin: 200px;
            }
        </style>
</body>
</html>