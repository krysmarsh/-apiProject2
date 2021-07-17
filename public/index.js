
const baseURL = 'https://api.giphy.com/v1/gifs/random';
const key = 'noL8qxnZsamy6SQKd6BrVlc8uZwgYBXe';



function getFetch() {
url = `${baseURL}?api_key=${key}`
fetch(url)
    .then(response => response.json())
    .then(function (gif) {
        console.log(gif)
        displayImage(gif);
    });
}

getFetch();

function displayImage(giphyObject) {
//    console.log(giphyObject);
//let displayFetch = document.getElementById("display-fetch")
 // displayFetch.innerText = ""; 
const section = document.querySelector('section');

let img = document.createElement('img');
section.img_url = ""; 
img.className = 'card-img-top';
img.src = giphyObject.data.image_url ;
//console.log(giphyObject);




let title = document.createElement('h1');
title.className = 'card-title';
title.innerText = giphyObject.data.title;



section.appendChild(img);
section.appendChild(title);
//section.appendChild(section);   


// let button1 = document.getElementsByClassName("btn btn-dark");
//    console.log(button1);
//      button1.addEventListener("click", handleClick);

// function handleClick() {
//     displayImage();
// }
}
