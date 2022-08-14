"strict";
//the variables
const hiddenSignUp = document.querySelector(".formsection__Onediv");
const hiddenSignIn = document.querySelector(".formsection__Onedivtwo");
hiddenSignUp.classList.add("formsection__Onedivtwohidden");
const leadSignIn = document.querySelector(".formPspan");
const leadSignUp = document.querySelector(".goback");
const hiddenRegulatoryDiv = document.querySelector(".regulatorDiv");
const hiddenForm = document.querySelector(".totalSection");
const hiddenGetStarted = document.querySelector(
  ".Renewedcrown__leaderwebsitedesign--headerbutton"
);
const renewedObserver = document.querySelector(".renewed__sectiontwo");
//the activities or orders
leadSignUp.addEventListener("click", function () {
  hiddenSignIn.classList.add("formsection__Onedivtwohidden");
  hiddenSignUp.classList.remove("formsection__Onedivtwohidden");
});
leadSignIn.addEventListener("click", function () {
  hiddenSignIn.classList.remove("formsection__Onedivtwohidden");
  hiddenSignUp.classList.add("formsection__Onedivtwohidden");
});
//hidden regulatorydiv and form section
hiddenRegulatoryDiv.style.display = "none";
hiddenForm.style.display = "none";
/*The get started hide script*/
hiddenGetStarted.addEventListener("click", function () {
  hiddenRegulatoryDiv.style.display = "block";
  hiddenForm.style.display = "block";
});
hiddenRegulatoryDiv.addEventListener("click", function () {
  hiddenRegulatoryDiv.style.display = "none";
  hiddenForm.style.display = "none";
});
//the scroll script

//const headBar = document.querySelector(
// ".Renewedcrown__leaderwebsitedesign--headerdiv"
//);
renewedObserver.classList.add("transitstyle");
const callFunction = function (entries) {
  const [entry] = entries;
  console.log(entry);
  if (entry.isIntersecting) {
    entry.target.classList.remove("transitstyle");
    observer.unobserve(entry.target);
  }
};

const callActivity = {
  root: null,
  threshold: 0.2,
};
const observer = new IntersectionObserver(callFunction, callActivity);
observer.observe(renewedObserver);
/* the menu appearance scripting starts here*/
//hiddenRegulatoryDiv
//the variables
const menu = document.querySelector(".headerhid");
const menuTab = document.querySelector(".menutab");
//the commands
menuTab.style.display = "none";
menu.addEventListener("click", function () {
  menuTab.style.display = "block";
  hiddenRegulatoryDiv.style.display = "block";
});
hiddenRegulatoryDiv.addEventListener("click", function () {
  menuTab.style.display = "none";
});
//the signin list under maenu tab
const signInList = document.querySelector("#asidelisihnin");
signInList.style.cursor = "pointer";
const signUpList = document.querySelector("#asidelisihnup");
signInList.addEventListener("click", function () {
  menuTab.style.display = "none";
  hiddenRegulatoryDiv.style.display = "none";
  hiddenForm.style.display = "block";
  hiddenSignIn.classList.remove("formsection__Onedivtwohidden");
  hiddenRegulatoryDiv.style.display = "block";
});
//sign up
signUpList.style.cursor = "pointer";
signUpList.addEventListener("click", function () {
  menuTab.style.display = "none";
  hiddenRegulatoryDiv.style.display = "none";
  hiddenForm.style.display = "block";
  hiddenSignUp.classList.remove("formsection__Onedivtwohidden");
  hiddenRegulatoryDiv.style.display = "block";
  hiddenSignIn.classList.add("formsection__Onedivtwohidden");
});
//the sliding bar script
//the variables
const leftarr = document.querySelector(".leftArr");
const rightarr = document.querySelector(".rightArr");
const imgsSlide = document.querySelectorAll(".productImgDivReal");
let curSlide = 0;
const maxSlide = imgsSlide.length;
//the commands
imgsSlide.forEach(
  (s, i) => (s.style.transform = `transition = transform 800ms;`)
);
imgsSlide.forEach((s, i) => (s.style.transform = `translateX(${100 * i}%)`));
rightarr.addEventListener("click", function () {
  if (curSlide === maxSlide - 1) {
    curSlide = 0;
  } else {
    curSlide++;
  }

  imgsSlide.forEach(
    (s, i) => (s.style.transform = `translateX(${100 * (i - curSlide)}%)`)
  );
});

leftarr.addEventListener("click", function () {
  if (curSlide === 0) {
    curSlide = maxSlide - 1;
  } else {
    curSlide--;
  }

  imgsSlide.forEach(
    (s, i) => (s.style.transform = `translateX(${100 * (i - curSlide)}%)`)
  );
});
//the article observer
//variables
const articleObserver = document.querySelector(".production__article");
articleObserver.classList.add("sectioarticle");
//the command
const observeFunction = function (entries, observer) {
  const [entry] = entries;
  console.log(entry);
  if (!entry.isIntersecting) return;
  else {
    entry.target.classList.remove("sectioarticle");
    observer.unobserve(entry.target);
  }
};
const observeObject = {
  root: null,
  threshold: 0.2,
};

const artObserver = new IntersectionObserver(observeFunction, observeObject);
artObserver.observe(articleObserver);
//the about us script
//variables
const aboutUsSection = document.querySelector(".aboutus__section");
//the command
aboutUsSection.classList.add("sectioarticle");
const aboutFunction = function (entries, observer) {
  const [entry] = entries;
  console.log(entry);
  if (!entry.isIntersecting) return;
  else {
    entry.target.classList.remove("sectioarticle");
  }
  observer.unobserve(entry.target);
};
const aboutUsObject = {
  root: null,
  threshold: 0.1,
};
const aboutUsobserver = new IntersectionObserver(aboutFunction, aboutUsObject);
aboutUsobserver.observe(aboutUsSection);

//the product scroll script
const pruductSmoothScroll = document.querySelector("#prscroolinto");
const productScroll = document.querySelector("#puductscroll");
productScroll.style.cursor = "pointer";
productScroll.addEventListener("click", function () {
  pruductSmoothScroll.scrollIntoView({
    behavior: "smooth",
  });
});
//the about us smooth scrolling
const aboutUsScroll = document.querySelector("#aboutus__section--Click");
const aboutUsScrollClick = document.querySelector("#aboutUsScrollClick");
aboutUsScrollClick.style.cursor = "pointer";
aboutUsScrollClick.addEventListener("click", function () {
  aboutUsScroll.scrollIntoView({
    behavior: "smooth",
  });
});
//the scroll to top button
const scrollTopCutton = document.querySelector(".topscrollingbutton");
const topScrolled = document.querySelector("#Renewedcrown__nav--top");
scrollTopCutton.style.cursor = "pointer";
scrollTopCutton.addEventListener("click", function () {
  topScrolled.scrollIntoView({
    behavior: "smooth",
  });
});
//footer scroll
const footerGotTo = document.querySelector("#endedfooter");
const footeridclick = document.querySelector("#contactId");
footeridclick.style.cursor = "pointer";
footeridclick.addEventListener("click", function () {
  footerGotTo.scrollIntoView({
    behavior: "smooth",
  });
});
