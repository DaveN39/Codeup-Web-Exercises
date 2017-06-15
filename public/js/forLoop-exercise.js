// with incremeter
for (var i = 0; i <= 10; ++1) {
	console.log(i);
}

// with decremeter
for (var i = 10; i >= 0; -=2) {
	console.log(i);
}

// nested for loops
for (var i = 0; i <= 10; ++i) {
	console.log("Badgers, badgers, badgers");
	for (var j = 0; j <= 1; ++j) {
		console.log("Mushroom");
	}
}

// multiple iterators (less common)
for (var i = 0, j = 9; i < 10; ++i, --j) {
	console.log("Value of i: " + i + )
}

// break and continue
var y = 0;

while (true) {
	if (y === 10)
		console.log("End of loop!");
		break;
}
++ y;
console.log(y);

// continue loop
var y = 0;

while(true) {
	y++;
	if (y === 100){
		console.log("End of loop!");
		break;
	}

	if (y % 2 === 0) {
		continue;
	}
	console.log(y);
}