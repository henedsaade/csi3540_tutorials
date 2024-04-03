I will be identifying the errors in the comments and how I corrected them

a) 

if (age >= 65) { // Removed semicolon and added opening brace

    document.writeln("Age greater than or equal to 65");

} else { // Added else statement and opening brace

    document.writeln("Age is less than 65");

}

b)

var x = 1, total = 0; // Initialized total to 0

while (x <= 10) {

    total += x;

    ++x;

}

c) 

var x = 1;

var total = 0;

while (x <= 100) { // Corrected the casing of 'While' to 'while'

    total += x;

    ++x;

}

d) 

var y = 5;

while (y > 0) {

    document.writeln(y);

    --y; // Decremented y instead of incrementing
    
}

