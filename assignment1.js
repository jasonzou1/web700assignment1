/*********************************************************************************
*  WEB700 – Assignment 1
*  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.  
*  No part of this assignment has been copied manually or electronically from any other source
*  (including web sites) or distributed to other students.
* 
*  Name: ___Jiasheng Zou___________________ Student ID: ___141462226___________ Date: ________May 20th 2023________
*
********************************************************************************/ 
let serverVerbs = ["GET", "GET", "GET", "POST", "GET", "POST"];
let serverPaths = ["/", "/about", "/contact", "/login", "/panel", "/logout"];
let serverResponses = [
    "Welcome to WEB700 Assignment 1", 
    "This assignment was prepared by Jiasheng Zou", 
    "Jiasheng Zou: jzou28@myseneca.ca", 
    "User Logged In", 
    "Main Panel", 
    "Logout Complete"
];

function httpRequest(httpVerb, path) {
    for (let i = 0; i < serverPaths.length; i++) {
        if (serverVerbs[i] === httpVerb && serverPaths[i] === path) {
            return `200: ${serverResponses[i]}`;
        }
    }
    return `404: Unable to process ${httpVerb} request for ${path}`;
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}


function automateTests() {
    let testVerbs = ["GET", "POST"];
    let testPaths = ["/", "/about", "/contact", "/login", "/panel", "/logout", "/randomPath1", "/randomPath2"];
    
    function randomRequest() {
        let randVerb = testVerbs[getRandomInt(testVerbs.length)];
        let randPath = testPaths[getRandomInt(testPaths.length)];
        console.log(httpRequest(randVerb, randPath));
    }
    
    setInterval(randomRequest, 1000);
}

automateTests();




