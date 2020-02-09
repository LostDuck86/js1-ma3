//Question 1

const arrowFunction = (a, b) =>{
    return a - b;
}


//Question 2
fetch("https://api.rawg.io/api/games?genres=sports")
.then(function(response) {

    return response.json();
})
.then(function(json) {

    for (let i = 0; i <json.results.length; i++){
        console.log(json.results[i].name);
    }    
})
.catch (function() {
    document.location.href = "error.html";
});


//Question 3
const cats = document.querySelector("h1");
cats.innerHTML = cats.innerHTML.replace("cats", "giraffes");


//Question 4

/*
I do not know what I am doing wrong here, but if I run this code it removes the answers 
from the other questions from my code. also I dont understand how we are meant to refer to the link.

const queryString = document.location.search;
const params = new URLSearchParams(queryString);

let userId;

if (params.has("userId")) {
    userId = params.get("userId");
}

if (userId < 10) {
    document.location.href("first.html");
} else if (userId >= 10) {
    document.location.href = "second.html";
} else {
    Document.location.href = "third.html";
};

 */


//Question 5
const container = document.querySelector(".container");
const button = document.querySelector(".btn");
container.removeChild(button);


//Question 6
const animals = document.querySelector(".animals");

const elephant = document.querySelector(".elephants");

const list = document.createElement("li");
list.className = "parrots";
list.innerHTML = "Parrots";

animals.appendChild(list);
elephant.before(list);



//Question 7

fetch("https://api.rawg.io/api/games/3801")
.then(function(response) {

    return response.json();
})
.then(function(json) {
    const rating = document.querySelector(".rating");
    rating.innerHTML = json.rating;       
})
.catch (function(error) {
    console.log("error");
})
