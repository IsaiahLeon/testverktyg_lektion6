/* Page content */
const homePageContent = `<p id="my-id">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed quasi doloribus velit aut voluptatibus esse perspiciatis fugiat molestiae temporibus eum asperiores ex neque dolorum soluta, aliquid commodi aliquam eveniet numquam!</p>
<p class="my-class">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores, alias provident aperiam excepturi commodi, omnis iusto necessitatibus fugit iste minima nisi eveniet quod labore, a facere ullam voluptate unde suscipit.</p>
<p class="two-classes">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus, eos eveniet, necessitatibus est voluptatibus velit culpa reiciendis reprehenderit earum deleniti sit mollitia nulla sint illo nam, perspiciatis ex explicabo exercitationem.</p>
`;

const aboutPageContent = `
    <h>Om mig</h>
    <p>Här kan du skriva lite om dig själv</p>
`;

const hobbiesPageContent = `
    <h1>Mina hobbies</h1>
    <p>Här kan du skriva om dina hobbies</p>
    `;

const contactPageContent = `
    <h1>Kontakt</h1>
    <p>Kontakta mig</p>
    `;

// Functions: 
// Grab elements 
const mainContent = document.querySelector("#main-content");
const navLinks = document.querySelectorAll("nav a");


// Get all navlinks and add event listeners to them
navLinks.forEach(link => {
    link.addEventListener("click", event => {
        event.preventDefault(); // Prevent page reload
        const page = link.dataset.page; // Get the string from each data-page attribute
        setActiveNavLink(link); //Move to the "active" class
        updatePageContent(page); // Render new page
    });

});

// Set the "active" class on the page we are currently on
//function setActiveNavLink(link) {
//     for(nav of navLinks) {
//         nav.classList.remove("active");
//     }
//     link.classList.add("active");
// }

function setActiveNavLink(link) {
    navLinks.forEach(link => link.classList.remove("active"));
    link.classList.add("active");
}

// Update page content
function updatePageContent(page) {
    switch(page) {
        case "home":
            mainContent.innerHTML = homePageContent;
            break;
        case "about":
            mainContent.innerHTML = aboutPageContent;
            break;
        case "hobbies":
            mainContent.innerHTML = hobbiesPageContent;
            break;
        case "contact":
            mainContent.innerHTML = contactPageContent;
            break;
        default:
            mainContent.innerHTML = homePageContent;
            break;
    }
}
// Since we have an empty div and need some default content
// We run this function once without a property to get the default case of the switch
updatePageContent();