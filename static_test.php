<?php

require __DIR__ . "/Model.php";
require __DIR__ . "/User.php";

$user = new User();

echo "The table that stores users is " . User::getTableName();
