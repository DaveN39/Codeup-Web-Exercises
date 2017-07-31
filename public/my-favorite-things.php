<?php
function pageController() {

return ["favs" => [ 'Motorcycles', 'Vacations', 'Coral aquariums', 'Beatles music', 'College football' ]];
}
extract(pageController());
?>
<html>
    <head></head>
    <body>
        <h1>My Favorite Things:</h1>
        <table class="table table-stripped">
            <?php foreach($favs as $fav): ?>
            <tr>
                 <td><?= $fav ?></td>
            </tr>
            <?php endforeach; ?>
        <? endforeach; ?>
        </table>
    </body>
</html>