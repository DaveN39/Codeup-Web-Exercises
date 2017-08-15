<?php
require_once 'parks_login.php';
require_once 'db_connect.php';
$createTableQuery = 'CREATE TABLE national_parks(
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    name VARCHAR(150) NOT NULL,
    location VARCHAR(165) NOT NULL,
    date_established DATE NOT NULL,
    area_in_acres DOUBLE NOT NULL,
    description TEXT NOT NULL,
    PRIMARY KEY (id)
)';
$connection->exec('DROP TABLE IF EXISTS national_parks');
$connection->exec($createTableQuery);