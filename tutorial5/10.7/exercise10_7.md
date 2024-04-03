a) False. To refer to a particular location or element in an array, we specify the name of the array followed by the index of the element in square brackets.

b) True. A variable declaration reserves space for an array by allocating memory to hold the specified number of elements.

c) False. The declaration p[100]; only declares an array p without initializing it. To indicate that 100 locations should be reserved for integer array p, the correct declaration is var p = new Array(100); or var p = []; p.length = 100;.

d) False. A JavaScript program that initializes the elements of a 15-element array to zero can use various techniques, including a simple assignment like var arr = new Array(15).fill(0);. No for statement is necessary if the initialization is done at the time of array creation.

e) True. A JavaScript program that totals the elements of a two-dimensional array usually requires nested for statements to iterate over each element in the array. One loop is needed to iterate over the rows, and another loop is needed to iterate over the columns within each row.
