<?php
function getRandomElement($array) {
    $randomKey = array_rand($array);
    return $array[$randomKey];
}
function pageController() {
    $data = [];
    $nouns = ['Donut', 'Cupcake', 'Pot-Pie', 'Cookie', 'Burrito', 'Hotdog', 'Milkshake', 'Chocolate', 'Hamburger', 'Marshmellow'];
    $adjectives = ['Fatty', 'Lazy', 'Sloppy', 'Nasty', 'Horny', 'Dirty', 'Smelly', 'Drunk', 'Pukey', 'Slimey'];
    $data['randomAdjective'] = getRandomElement($adjectives);
    $data['randomNoun'] = getRandomElement($nouns);
    return $data;
}
extract(pageController());
?>

<html>
    <head></head>
    <body>
        <h1>My random server name is: <?= $randomAdjective . '-' . $randomNoun ?></h1>
    </body>
</html>