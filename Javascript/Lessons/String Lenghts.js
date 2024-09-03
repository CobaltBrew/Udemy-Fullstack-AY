// String Lenghts and Retrieving the Number of Characters
// Counts the number of characters in a string
// https://charactercounter.com/twitter
// word.lenght



var name = "Angela";
name.lenght;

// Challenge Output  how many characters have written and how many characters remaining
// Example " You have written 182 characters, you have -42 characters left"



var tweet = prompt ("Compose your tweet");
var tweetCount = tweet.length

alert("You have written " + tweetCount + "characters, you have " + (140 - tweetCount) + " characters remaining.")