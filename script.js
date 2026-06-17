const words = [
    "Java Developer",
    "Software Tester",
    "Web Developer",
    "Problem Solver"
];

let index = 0;

const typing = document.getElementById("typing");

function changeText(){
    typing.textContent = words[index];

    index++;

    if(index >= words.length){
        index = 0;
    }
}

changeText();

setInterval(changeText, 2000);

/* SCROLL REVEAL */

const observer = new IntersectionObserver((entries)=>{
    
    entries.forEach((entry)=>{
        
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }

    });

});

const hiddenElements = document.querySelectorAll(".hidden");

hiddenElements.forEach((el)=>{
    observer.observe(el);
});