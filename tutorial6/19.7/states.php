<?php
// Create the $states variable
$states = "Mississippi Alabama Texas Massachusetts Kansas";

// Initialize the $statesArray
$statesArray = array();

// Task a) Search for a word in $states that ends in xas
preg_match('/\b\w*xas\b/', $states, $matches);
$statesArray[0] = $matches[0];

// Task b) Search for a word in $states that begins with k and ends in s
preg_match('/\b\w*k.*s\b/i', $states, $matches);
$statesArray[1] = $matches[0];

// Task c) Search for a word in $states that begins with M and ends in s
preg_match('/\bM\w*ss\b/', $states, $matches);
$statesArray[2] = $matches[0];

// Task d) Search for a word in $states that ends in a
preg_match('/\b\w*a\b/', $states, $matches);
$statesArray[3] = $matches[0];

// Task e) Search for a word in $states at the beginning of the string that starts with M
preg_match('/^M\w+/', $states, $matches);
$statesArray[4] = $matches[0];

// Output the $statesArray
print_r($statesArray);
?>
