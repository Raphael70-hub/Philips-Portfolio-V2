window.addEventListener("scroll", function(){
  var nav = document.querySelector("nav");
  nav.classList.toggle("sticky", window.scrollY > 50);

  var textContent = document.getElementById('textContent');
    var imageContent = document.getElementById('imageContent');
    
    // Check the scroll position
    if (window.scrollY > 50) { // Adjust this value to when you want the change to happen
        textContent.style.display = 'none';
        imageContent.style.display = 'block';
    } else {
        textContent.style.display = 'block';
        imageContent.style.display = 'none';
    }
})

// console.log(window.innerWidth);
if(window.innerWidth <= 900 ){
    var destopCarousel = document.querySelector("#destopcarousel");
    destopCarousel.style.display = "none"

    var mobilecarousel = document.querySelector("#mobilecarousel");
    mobilecarousel.style.display = "block"

    var marketingPlan = document.querySelector("#marketingPlan");
    marketingPlan.style.display = "none"

    var mobilemarketingcarousel = document.querySelector("#mobilemarketingcarousel");
    mobilemarketingcarousel.style.display = "block"

    var pricing = document.querySelector("#pricing");
    pricing.style.display = "none"

    var mobilepricingcarousel = document.querySelector("#mobilepricingcarousel");
    mobilepricingcarousel.style.display = "block"
}


if(window.innerWidth <= 900 ){
  var destopCarousel = document.querySelector("#destopcarousel");
  destopCarousel.style.display = "none"

  var video1 = document.querySelector("#video1");
  video1.width = 320;
  video1.height = 240;

  var video2 = document.querySelector("#video2");
  video2.width = 320;
  video2.height = 240;

  var video3 = document.querySelector("#video3");
  video3.width = 320;
  video3.height = 240;

  var mobilecarousel = document.querySelector("#mobilecarousel");
mobilecarousel.style.display = "block"

}

window.addEventListener("resize", function(){
    if(window.innerWidth <= 900 ){
        var destopCarousel = document.querySelector("#destopcarousel");
        destopCarousel.style.display = "none"

        var video1 = document.querySelector("#video1");
        video1.width = 320;
        video1.height = 240;

        var video2 = document.querySelector("#video2");
        video2.width = 320;
        video2.height = 240;

        var video3 = document.querySelector("#video3");
        video3.width = 320;
        video3.height = 240;

        var mobilecarousel = document.querySelector("#mobilecarousel");
        mobilecarousel.style.display = "block"

        var marketingPlan = document.querySelector("#marketingPlan");
        marketingPlan.style.display = "none"

        var mobilemarketingcarousel = document.querySelector("#mobilemarketingcarousel");
        mobilemarketingcarousel.style.display = "block"

        var pricing = document.querySelector("#pricing");
        pricing.style.display = "none"

        var mobilepricingcarousel = document.querySelector("#mobilepricingcarousel");
        mobilepricingcarousel.style.display = "block"

    }
    else{
        var destopCarousel = document.querySelector("#destopcarousel");
        destopCarousel.style.display = "block"

        var video1 = document.querySelector("#video1");
        video1.width = 410
        video1.height = 270;


        var video2 = document.querySelector("#video2");
        video2.width = 410;
        video2.height = 270;


        var video3 = document.querySelector("#video3");
        video3.width = 820;
        video3.height = 540;


        var mobilecarousel = document.querySelector("#mobilecarousel");
        mobilecarousel.style.display = "none"

        var marketingPlan = document.querySelector("#marketingPlan");
        marketingPlan.style.display = "block"

        var mobilemarketingcarousel = document.querySelector("#mobilemarketingcarousel");
        mobilemarketingcarousel.style.display = "none"

        var pricing = document.querySelector("#pricing");
        pricing.style.display = "block"

        var mobilepricingcarousel = document.querySelector("#mobilepricingcarousel");
        mobilepricingcarousel.style.display = "none"
    }

})

// var emailForm = document.querySelector("#emailform");

// emailForm.addEventListener("submit" ,function submit(){
//     console.log("clicked")
//     var popup = document.querySelector("#sendemail");
//     popup.style.display = "block";
// })

// function cancle(){
//     var popup = document.querySelector("#sendemail");
//     popup.style.display = "none";
// }

const sendMail = (mail) => {
    //1.
    fetch("/send", {
      method: "post", //2.
      body: mail, //3.
  
    }).then((response) => {
      return response.json();
    });
  };

// if(sendMail.email === ""){
//     window.location.href="/email_required.html"
// }
  

//get the form by its id
const form = document.getElementById("emailform"); 

//1.
// const formEvent = form.addEventListener("submit", (event) => {
//   event.preventDefault();

//   //2.
//   let mail = new FormData(form);

//   //3.
//   sendMail(mail);
// })


