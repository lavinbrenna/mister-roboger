# Mister Robo-ger's Neighborhood

#### By Brenna Lavin

#### Enter some numbers have Mr.Robo-ger leave you a message!

## Technologies Used

* HTML
* CSS
* jQuery
* Bootstrap
* JavaScript

## Description

Using Javascript, this page will loop through an array of numbers, up to the one input by the user, and build a message based on the values associated with each number.

## Setup/Installation Requirements

* Clone Git repository to local machine
* Navigate to index.html
* Open in default browser
* Or open in Git Hub Pages link
* [GitHubPages Link]("http://www.google.com")

## Known Bugs

* No known bugs at this time

## Tests

Description: numberAnalyzer()

Test: "It should return true if a single digit number is passed in"
Code:
let userInput = 0;
numberAnalyzer(userInput);
Expected Output:
true

Test: "It should return true if multiple digits are passed in"
Code:
let userInput = 10;
numberAnalyzer(userInput);
Expected Output:
True

Test: "It should return false if letters or punctuation are passed in"
Code:
let userInput = "hi!";
numberAnalyzer(userInput);
ExpectedOutput:
false

Test: "It should return false if there is a mix of numbers, letters, and punctuation"
Code:
let userInput = "h1!";
numberAnalyzer(userInput);
ExpectedOutput:
false

Description: messageCreator()

Test: "it should return an array with the numbers up to the number entered by the user"
Code:
let userInput = "0";
messageCreator(userInput);
Expected Output:
[0]

Test: "it should return an array with the numbers up to the number entered by the user"
Code:
let userInput = "10";
messageCreator(userInput);
Expected Output:
[0,1,2,3,4,5,6,7,8,9,10]

Test: "it should return an array with the number 1 replaced with 'Beep!'"
Code:
let userInput = "5";
messageCreator(userInput);
Expected Output:
[0,"Beep!",2,3,4,5]

Test: "it should return an array with the number 2 replaced with 'Boop!'"
Code:
let userInput = "5";
messageCreator(userInput);
Expected Output:
[0,"Beep!","Boop!",3,4,5]

Test: "it should return an array with the number 3 replaced with 'Won't you be my neighbor?'"
Code:
let userInput = "5";
messageCreator(userInput);
Expected Output:
[0,"Beep!","Boop!","Won't you be my neighbor?",4,5]

Test: "it should return an array with number 13 replaced with 'Won't you be my neighbor?'"
Code:
let userInput ="15";
messageCreator(userInput);
Expected Output:
[0,"Beep!","Boop!", "Won't you be my neighbor?", 4,5,6,7,8,9,10,11,12,"Won't you be my neighbor?", 14, 15]

Test: "it should return an array with number 21 replaced with 'boop', and 13 should remain a number"
Code:
let userInput = "22";
messageCreator(userInput);
Expected Output:
[0,"Beep!","Boop!", "Won't you be my neighbor?", 4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,"Beep",22]

## License

MIT License

Copyright (c) [2022] [Brenna Lavin]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

