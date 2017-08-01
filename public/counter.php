<?php
  
function pageController()
{
    $data = [];
    $data['count'] = isset($_GET['count']) ? $_GET['count'] : 0;
    return $data;
}
extract(pageController());
?>
<!DOCTYPE HTML>
<html>
    <head>

    </head>
    <body>
        <h1>Counter: <?= $count ?></h1>
        <a href="?direction=up&count=<?php echo $count+1; ?>">Up</a>
        <a href="?direction=down&count=<?php echo $count-1; ?>">Down</a>
    </body>
</html>