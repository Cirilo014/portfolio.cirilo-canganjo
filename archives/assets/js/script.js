//Variables
let boxlanguages = document.querySelector(".box-languages");
let navbar = document.querySelector("#nav-bar");
let lilanguages = document.querySelector("#li-languages");
let navhome = document.getElementById("home");
let navcontacts = document.getElementById("contacts");
let language = document.querySelector(".language");
let englishmode = document.getElementById("language-english");

//Body Variables

let mydescription = document.querySelector("#my-description");
let techtitle = document.querySelector("#tech-title");
let projecttitle = document.querySelector("#project-title");
let socialmidiatitle = document.querySelector("#social-midia-title");
let copyrighttext = document.querySelector("#copyright-text");

//Geting Year from server
let now = new Date();
fullyear = now.getFullYear();

navhome.innerHTML = "Início";
navcontacts.innerHTML = "Contactos";
language.innerHTML = "Idioma";


boxlanguages.style.display = "none"; 
copyrighttext.textContent = `Copyright ${fullyear} - Todos os direitos reservados`;
// navbar.addEventListener("click", () =>{
//     boxlanguages.style.display = "none";

// });

lilanguages.addEventListener("click", () =>{   
    
    boxlanguages.style.display = "block";        
});

function HdenLanguages(){
    let = main = document.querySelector(".main")
    main.addEventListener("click", () =>{
        boxlanguages.style.display = "none";
    });
}
HdenLanguages();

function EnglishMode(){
    englishmode.addEventListener("click", () => {
        mydescription.textContent = 
        `
        I am Software Engineer and web developer, with more of 3 years of experience.
        I am capability to reply challenges of market particularly on software development, responsive 
        and efficients.
        
        `
        navhome.textContent = "Home";
        navcontacts.textContent = "Contacts";
        language.textContent = "English";
        techtitle.textContent = "Technologies";
        projecttitle.textContent = "Projects";
        socialmidiatitle.textContent = "Social Midia";
        copyrighttext.textContent = `Copyright ${fullyear}- All rights reserved`;
        boxlanguages.remove();
});


 
}
 
EnglishMode();

