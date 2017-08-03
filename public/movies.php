<?php
require 'allMovies.php';
require_once 'functions.php';

function getMoviesByGenre($genre, $allMovies) {
    $movies = [];
    foreach ($allMovies as $movie) {
        if(in_array($genre, $movie['genre'])) {
            $movies[] = $movie;
        }
    }
    return $movies;
}

function getMoviesByTitle($title, $allMovies) {
    $movies = [];
    foreach ($allMovies as $movie) {
        if(stirpos($movie['title'], $title) !== false) {
            $movies[] = $movie;
        }
    }
    return $movies;
}
function pageController($allMovies)
{
    $data = [];
    $title = inputGet('title');
    $release = inputGet('release');


    if(!empty($genre) && empty($title)) {
        $data['movies'] = getMoviesByGenre($genre, $allMovies);
    } elseif (!empty($title) && empty($genre)) {
        $data['movies'] = getMoviesByTitle($title, $allMovies);
    } elseif (!empty($title) && !empty($genre)) {
        $moviesWithGenre = getMoviesByGenre($genre, $allMovies);
        $moviesWithGenreAndTitle = getMoviesByTitle($title, $moviesWithGenre);
        $data['movie'] = $moviesWithGenreAndTitle;
    } else {
        $data['movies'] = $allMovies;
    }
    if(!empty($release)) {
        $movies = [];
        foreach ($allMovies as $movie) {
            if($movie['release'] > $release) {
                $movies[] = $movie;
            }
        }
        $data['movies'] = $movies;
    }
    return $data;
}

extract(pageController($allMovies));

?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title></title>
</head>
<body>
    <main class="container">
        
        <h1>Welcome to MovieLister!</h1>

        <section class="form">
            <form method="GET" action="movies.php">
                <h3>Search for movies below.</h3>
                <!-- Add an input to search by "title" -->
                <label for='title'>Title</label>
                <input type="text" id="title" name="title" placeholder="Search by title">
                <!-- Add a form that has an input for "genre" -->
                <label for='genre'>Genre</label>                
                <input type="text" id="genre" name="genre" placeholder="Search by genre">
                <!-- Add submit button -->
                <button type="submit">Search for movies!</button>
            </form>
        </section><br>

        <section class="links">
            <!-- Add a link that will show all movies  -->
            <a href="movies.php">Show all movies</a>

            <!-- Add a link that will show only movies with a release date after 2000 -->
            <a href="movies.php?release=2000">All movies released after 2000</a>

            <!-- Add a link that shows all movies w/ the comedy genre -->
            <a href="movies.php?genre=comedy">Show only comedies</a>
            
            <a href="movies.php?genre=sci-fi">Show all Sci-Fi movies</a>
            
        </section>
        <section class="movies">
            <!-- Show all the movies here -->
            <!-- Iterate through $movies array to show all or the filtered results-->
            <?php foreach($movies as $movie): ?>
                <div>
                    <h3>Title: <?= $movie['title'] ?></h3>
                    <p>Released in: <?= $movie['release'] ?></p>
                    <p>Genres: <?= implode(", ", $movie['genre']) ?></p>
                </div>
            <?php endforeach; ?>
        </section>
    </main>
</body>
</html>