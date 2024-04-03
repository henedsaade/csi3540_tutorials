a) Setting the 10 elements of array counts to zeros:

var counts = new Array(10).fill(0);

b) Adding 1 to each of the 15 elements of array bonus:

for (var i = 0; i < 15; i++) {

    bonus[i]++;

}

c) Displaying the five values of array bestScores, separated by spaces:

console.log("Values of array bestScores: " + bestScores.slice(0, 5).join(" "));
