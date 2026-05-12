const btn = document.getElementById('menu-btn');
const overlay = document.getElementById('overlay');
const menu = document.getElementById('mobile-menu');
const counters = document.querySelectorAll('.counter');
let scrollStarted = false;

btn.addEventListener('click', navToggle);
document.addEventListener('scroll', scrollPage);

function navToggle() {
  btn.classList.toggle('open');
  overlay.classList.toggle('overlay-show');
  document.body.classList.toggle('stop-scrolling');
  menu.classList.toggle('show-menu');
}

function scrollPage() {
  const scrollPos = window.scrollY;

  if (scrollPos > 100 && !scrollStarted) {
    countUp();
    scrollStarted = true;
  } else if (scrollPos < 100 && scrollStarted) {
    reset();
    scrollStarted = false;
  }
}

function countUp() {
  counters.forEach((counter) => {
    counter.innerText = '0';

    const updateCounter = () => {
      // Get count target
      const target = +counter.getAttribute('data-target');
      // Get current counter value
      const c = +counter.innerText;

      // Create an increment
      const increment = target / 100;

      // If counter is less than target, add increment
      if (c < target) {
        // Round up and set counter value
        counter.innerText = `${Math.ceil(c + increment)}`;

        setTimeout(updateCounter, 75);
      } else {
        counter.innerText = target;
      }
    };

    updateCounter();
  });
}

function reset() {
  counters.forEach((counter) => (counter.innerHTML = '0'));
}

function verifierFormulaire() {


  let nom = document.getElementById("name");
  if(nom){
  if (nom.value.length >= 3) {
    nom.classList.add("valide");
    nom.classList.remove("error");
  } else {
    nom.classList.add("error");
    nom.classList.remove("valide");
  }
}
//_________________________________________________________

let prenom = document.getElementById("prenom");
if(prenom){

  if (prenom.value.length >= 3) {
    prenom.classList.add("valide");
    prenom.classList.remove("error");
  } else {
    prenom.classList.add("error");
    prenom.classList.remove("valide");
  }
}
//_________________________________________________________

let email = document.getElementById("email");
if(email){

  if (email.value.includes("@")) {
    email.classList.add("valide");
    email.classList.remove("error");
  } else {
    email.classList.add("error");
    email.classList.remove("valide");
  }
}

//_________________________________________________________

let pass = document.getElementById("password");
if(pass){
let passErrorText2 = pass.nextElementSibling;
  
if (pass.value.length >= 8) {
    pass.classList.add("valide");
    pass.classList.remove("error");
    passErrorText2.classList.add("invisible");
  } else {
    pass.classList.add("error");
    pass.classList.remove("valide");
    passErrorText2.classList.remove("invisible");
  }
}

//_________________________________________________________

let email2 = document.getElementById("email2");
if(email2){

  if (email2.value.includes("@")) {
    email2.classList.add("valide");
    email2.classList.remove("error");
  } else {
    email2.classList.add("error");
    email2.classList.remove("valide");
  }
}

//_________________________________________________________

let pass2 = document.getElementById("password2");
if(pass2){
let passErrorText3 = pass2.nextElementSibling;

  if (pass2.value.length >= 8) {
    pass2.classList.add("valide");
    pass2.classList.remove("error");
    passErrorText3.classList.add("invisible");
  } else {
    pass2.classList.add("error");
    pass2.classList.remove("valide");
    passErrorText3.classList.remove("invisible");
  }
}
}

//_________________________________________________________


const ageCheckbox = document.getElementById("formCheck-2");
const ageLabel = document.getElementById("age");


ageCheckbox.addEventListener('change', function() {
  if (ageCheckbox.checked) {
    ageLabel.classList.add('validetxt');
    ageLabel.classList.remove('erreurtxt');
  } else {
    ageLabel.classList.remove('validetxt');
    ageLabel.classList.add('erreurtxt');
  }
});