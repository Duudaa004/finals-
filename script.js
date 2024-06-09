const slides = document.querySelectorAll(".slides img")
let slideIndex = 0;
let intervalId = null;

initializeSlider();

function initializeSlider() {
    if(slides.length > 0){
        slides[slideIndex].classList.add("displaySlide");
        // intervalId = setInterval(nextSlide, 5000);
    }
}

function showSlide(index){

    if(index >= slides.length){
        slideIndex = 0
    }
    else if(index < 0){
        slideIndex = slides.length - 1;
}

    slides.forEach(slide => {
        slide.classList.remove("displaySlide");
    });
    slides[slideIndex].classList.add("displaySlide");
}

function prevSlide() {
    // clearInterval(intervalId);
    slideIndex--;
    showSlide(slideIndex);
}
function nextSlide(){
    slideIndex++;
    showSlide(slideIndex);
}


const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }else {
            entry.target.classList.remove('show');
        }
    });
});
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) =>  observer.observe(el));

// second slider


function showSecond() {
    document.getElementById("secondAdviser").style.display = "grid"
    document.getElementById("adviser").style.display = "none"
    document.getElementById("thirdAdviser").style.display = "none"
}

function showFirst() {
    document.getElementById("adviser").style.display = "grid"
    document.getElementById("secondAdviser").style.display = "none"
    document.getElementById("thirdAdviser").style.display = "none"
}

function showThird() {
    document.getElementById("thirdAdviser").style.display = "grid"
    document.getElementById("adviser").style.display = "none"
    document.getElementById("secondAdviser").style.display = "none"
}


// projects

function showAll() {
    document.getElementById("firstHidden").style.opacity = 1
    document.getElementById("secondHidden").style.opacity = 1
    document.getElementById("thirdHidden").style.opacity = 1
    document.getElementById("forthHidden").style.opacity = 1
    document.getElementById("fifthHidden").style.opacity = 1
    document.getElementById("sixthHidden").style.opacity = 1
}

function showWork() {
    document.getElementById("firstHidden").style.opacity = 1
    document.getElementById("secondHidden").style.opacity = 0
    document.getElementById("thirdHidden").style.opacity = 0
    document.getElementById("forthHidden").style.opacity = 0
    document.getElementById("fifthHidden").style.opacity = 0
    document.getElementById("sixthHidden").style.opacity = 0
}

function showMockup() {
    document.getElementById("firstHidden").style.opacity = 0
    document.getElementById("secondHidden").style.opacity = 1
    document.getElementById("thirdHidden").style.opacity = 0
    document.getElementById("forthHidden").style.opacity = 0
    document.getElementById("fifthHidden").style.opacity = 0
    document.getElementById("sixthHidden").style.opacity = 0
}

function showPsd() {
    document.getElementById("firstHidden").style.opacity = 0
    document.getElementById("secondHidden").style.opacity = 0
    document.getElementById("thirdHidden").style.opacity = 1
    document.getElementById("forthHidden").style.opacity = 0
    document.getElementById("fifthHidden").style.opacity = 0
    document.getElementById("sixthHidden").style.opacity = 0
}

function showLogo() {
    document.getElementById("firstHidden").style.opacity = 0
    document.getElementById("secondHidden").style.opacity = 0
    document.getElementById("thirdHidden").style.opacity = 0
    document.getElementById("forthHidden").style.opacity = 1
    document.getElementById("fifthHidden").style.opacity = 0
    document.getElementById("sixthHidden").style.opacity = 0
}

function showPresentation() {
    document.getElementById("firstHidden").style.opacity = 0
    document.getElementById("secondHidden").style.opacity = 0
    document.getElementById("thirdHidden").style.opacity = 0
    document.getElementById("forthHidden").style.opacity = 0
    document.getElementById("fifthHidden").style.opacity = 1
    document.getElementById("sixthHidden").style.opacity = 0
}

function showIcons() {
    document.getElementById("firstHidden").style.opacity = 0
    document.getElementById("secondHidden").style.opacity = 0
    document.getElementById("thirdHidden").style.opacity = 0
    document.getElementById("forthHidden").style.opacity = 0
    document.getElementById("fifthHidden").style.opacity = 0
    document.getElementById("sixthHidden").style.opacity = 1
}


// input

const statusField = document.createElement("span")
statusField.setAttribute("id", "status_field")
const contactForm = document.getElementById("contact_form_content")
const formContainer = document.querySelector(".contact_form_bars_container")
formContainer.appendChild(statusField)

contactForm.addEventListener("submit", (e) => {
    e.preventDefault()

    const name = document.getElementById("your_name")
    const email = document.getElementById("email")
    const website = document.getElementById("website")
    const message = document.getElementById("message")

    

    try {
        if (name.value.length < 6 ) {
            name.style.border = "4px solid #E93656"
            throw new Error("Name should contain at least 6 letters")
        } else {
            name.style.border = "4px solid green"
        }

        const validateEmail = (mail) => {
            return String(mail)
              .toLowerCase()
              .match(  
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
          }

          const isValidateEmail = validateEmail(email.value)
          if (!isValidateEmail) {
            email.style.border = "4px solid #E93656"
            throw new Error("Email is not valid")
          } else {
            email.style.border = "4px solid green"
          }

          const validateWebsite = (web) => {
            return String(web)
              .toLowerCase()
              .match(/^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/)
          }

          const isValidateWebsite = validateWebsite(website.value)
          if (!isValidateWebsite) {
            website.style.border = "4px solid #E93656"
            throw new Error("Website is not valid")
          } else {
            website.style.border = "4px solid green"
          }

          if (message.value.length < 100) {
            message.style.border = "4px solid #E93656"
            throw new Error("Message should contain at least 100 letters")
          } else {
            message.style.border = "4px solid green"
          }
          
          if (name.style.border === "4px solid green" && email.style.border === "4px solid green" && website.style.border === "4px solid green" && message.style.border === "4px solid green") {
            statusField.textContent = "Thank you, information sent successfully"
            statusField.style.color = "green"
            setTimeout(() => {
                name.style.border = "none"
                name.value = ""
                email.style.border = "none"
                email.value = ""
                website.style.border = "none"
                website.value = ""
                message.style.border = "none"
                message.value = ""
                statusField.textContent = ""
            }, 4000)
          }

    } catch (error) {
        statusField.textContent = error.message
    }

    const formContent = new FormData(contactForm)
    const info = Object.fromEntries(formContent)

    fetch("https://borjomi.loremipsum.ge/api/send-message", {
        method:"POST",
        body: JSON.stringify(info)
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .then(error => console.log(error))

})