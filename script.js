// Smooth scrolling for navigation

document.querySelectorAll("nav a").forEach(function(link){

    link.addEventListener("click", function(event){

        event.preventDefault();

        let section = document.querySelector(
            this.getAttribute("href")
        );

        section.scrollIntoView({
            behavior:"smooth"
        });

    });

});


// Welcome message

window.onload = function(){

    console.log("Welcome to Vynavi's Portfolio");

};