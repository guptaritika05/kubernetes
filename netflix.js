var questions1 = document.querySelectorAll(".first");
var questions2= document.querySelectorAll(".second");
var questions3= document.querySelectorAll(".third");
var questions4= document.querySelectorAll(".fourth");
var questions5= document.querySelectorAll(".fifth");
var questions6= document.querySelectorAll(".sixth");

questions1.forEach(function (q) {
  q.addEventListener("click", function () {
    const answer = q.nextElementSibling; // assumes .firstanswer is right after .first
    answer.classList.toggle("active");
  });
});


questions2.forEach(function (q) {
  q.addEventListener("click", function () {
    const answer = q.nextElementSibling; // assumes .firstanswer is right after .first
    answer.classList.toggle("active");
  });
});

questions3.forEach(function (q) {
  q.addEventListener("click", function () {
    const answer = q.nextElementSibling; // assumes .firstanswer is right after .first
    answer.classList.toggle("active");
  });
});

questions4.forEach(function (q) {
  q.addEventListener("click", function () {
    const answer = q.nextElementSibling; // assumes .firstanswer is right after .first
    answer.classList.toggle("active");
  });
});

questions5.forEach(function (q) {
  q.addEventListener("click", function () {
    const answer = q.nextElementSibling; // assumes .firstanswer is right after .first
    answer.classList.toggle("active");
  });
});

questions6.forEach(function (q) {
  q.addEventListener("click", function () {
    const answer = q.nextElementSibling; // assumes .firstanswer is right after .first
    answer.classList.toggle("active");
  });
});
