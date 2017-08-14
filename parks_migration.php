<?php
require_once 'parks_login.php';
require_once 'db_connect.php';
$createTableQuery = 'CREATE TABLE national_parks(
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    name VARCHAR(150) NOT NULL,
    location VARCHAR(165) NOT NULL,
    date_established DATE NOT NULL,
    area_in_acres DOUBLE NOT NULL,
    description TEXT,
    PRIMARY KEY (id)
)';
$dbc->exec('DROP TABLE IF EXISTS national_parks');
$dbc->exec($createTableQuery);