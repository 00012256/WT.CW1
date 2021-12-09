const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");

const lorem60 = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore, debitis laborum eveniet cumque odit qui ipsum alias doloribus voluptatibus harum magnam quod recusandae voluptatum nulla corrupti, eos reprehenderit? Ut quam, aut nihil rerum tenetur expedita culpa natus officia itaque provident harum fugiat, odit officiis excepturi labore doloremque! Libero rem, sequi expedita facilis eum tempore blanditiis repellat porro voluptatibus hic suscipit!";

// portfolio section buttons
const btnAll = document.getElementById('btnAll')
const btnWeb = document.getElementById('btnWeb');
const btnAdvertising = document.getElementById('btnAdvertising');
const btnSmm = document.getElementById('btnSmm');
const btnBusiness = document.getElementById('btnBusiness');

const all = Array.from(document.querySelectorAll('.item'));
const web = Array.from(document.querySelectorAll('.web'));
const advertising = Array.from(document.querySelectorAll('.advertising'));
const smm = Array.from(document.querySelectorAll('.smm'));
const business = Array.from(document.querySelectorAll('.business'));

const userName = document.getElementById('inputName');
const userNumber = document.getElementById('inputTelNumber');
const form = document.getElementById('form');

// add active-link class to current page
const activePage = window.location.pathname;
navLink.forEach(link => {
  if(link.href.includes(`${activePage}`)){
    link.classList.add('active-link');
    console.log(link);
  }
})

// form validation
form.addEventListener('submit', e => {
  e.preventDefault();

  validateInputs();
})

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');
  errorDisplay.innerText = message;
  inputControl.classList.add('error');
  inputControl.classList.remove('success')
}

const setSuccess = element => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');
  errorDisplay.innerText = '';
  inputControl.classList.add('success');
  inputControl.classList.remove('error');
}

const validateInputs = () => {
  const userNameValue = userName.value.trim();
  const userNumberValue = userNumber.value.trim();

  if (userNameValue === '') {
    setError(userName, 'Name is required');
  } else {
      setSuccess(userName);
  }

  if (userNumberValue === '') {
    setError(userNumber, 'Phone number is required');
  } else {
      setSuccess(userNumber);
  }
}

// add active class in smaller screens
hamburger.addEventListener("click", mobileMenu);
function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

// if a nav link or hamburger menu is clicked close the hamburger menu
navLink.forEach(n => n.addEventListener("click", closeMenu));
function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

// back to top button
window.addEventListener('scroll', function() {
  var scroll = document.querySelector('.scrollTop')
  scroll.classList.toggle("active-top", window.scrollY > 500)
})

document.getElementById('scrollTop').addEventListener('click', function () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
})

// logic for portfolio section buttons
btnAll.addEventListener('click', function() {
    all.forEach(item => {
        item.style.display = "inline-block";
    })
})

btnWeb.addEventListener('click', function() {
    web.forEach(item => {
        item.style.display = "inline-block";
    })
    advertising.forEach(item => {
        item.style.display = "none";
    })
    smm.forEach(item => {
        item.style.display = "none";
    })
    business.forEach(item => {
      item.style.display = "none";
  })
})

btnAdvertising.addEventListener('click', function() {
    web.forEach(item => {
        item.style.display = "none";
    })
    advertising.forEach(item => {
        item.style.display = "inline-block";
    })
    smm.forEach(item => {
        item.style.display = "none";
    })
    business.forEach(item => {
      item.style.display = "none";
  })
})

btnSmm.addEventListener('click', function() {
    web.forEach(item => {
        item.style.display = "none";
    })
    advertising.forEach(item => {
        item.style.display = "none";
    })
    smm.forEach(item => {
        item.style.display = "inline-block";
    })
    business.forEach(item => {
      item.style.display = "none";
  })
})

btnBusiness.addEventListener('click', function() {
  web.forEach(item => {
      item.style.display = "none";
  })
  advertising.forEach(item => {
      item.style.display = "none";
  })
  smm.forEach(item => {
      item.style.display = "none";
  })
  business.forEach(item => {
    item.style.display = "inline-block";
})
})

// add active-btn class to the current button
let btnContainer = document.getElementById("myBtnContainer");
let btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active-btn");
    current[0].className = current[0].className.replace(" active-btn", "");
    this.className += " active-btn";
  });
}

let modalInfo = {
  1: {
    title: "1 - project name",
    info: lorem60
  },
  2: {
    title: "2 - project name",
    info: lorem60
  },
  3: {
    title: "3 - project name",
    info: lorem60
  },
  4: {
    title: "4 - project name",
    info: lorem60
  },
  5: {
    title: "5 - project name",
    info: lorem60
  },
  6: {
    title: "6 - project name",
    info: lorem60
  },
  7: {
    title: "7 - project name",
    info: lorem60
    },
  8: {
    title: "8 - project name",
    info: lorem60
    },
  9: {
    title: "9 - project name",
    info: lorem60
    },
  10: {
    title: "10 - project name",
    info: lorem60
    },
  11: {
    title: "11 - project name",
    info: lorem60
    },
  12: {
    title: "12 - project name",
    info: lorem60
    },
};

// get modal
var modal = document.getElementById('preview');

// button that opens modal
var btn = document.getElementsByClassName("button");

// span that closes modal
var span = document.getElementsByClassName("close")[0];

// opening modal
for(let i = 0; i < btn.length; i++){
  btn[i].addEventListener("click", function() {
    var project = btn[i].parentElement.parentElement.parentElement.parentElement;
    openModal(project);
  })
}

function openModal(project){
  var id = project.id;
  var img = project.getElementsByTagName("img")[0].src;
  fillOut(id, img);
  modal.style.display = "block";
  document.getElementsByClassName("modal-content")[0].classList.add("scale");
}

function fillOut(id, img){
  document.getElementById("title").innerHTML = modalInfo[id].title;
  document.getElementById("info").innerHTML = modalInfo[id].info;
  document.getElementById("img").src = img;
}

// closing modal
span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}