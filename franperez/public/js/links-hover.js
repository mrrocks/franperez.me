var linksDiv = document.getElementsByClassName('links')[0];
var mail = document.getElementById('mail');
var twitter = document.getElementById('twitter');
var linkedin = document.getElementById('linkedin');

mail.addEventListener('mouseover', function () {
  linksDiv.classList.add("mail");
});

mail.addEventListener('mouseout', function () {
  linksDiv.classList.remove("mail");
});

twitter.addEventListener('mouseover', function () {
  linksDiv.classList.add("twitter");
});

twitter.addEventListener('mouseout', function () {
  linksDiv.classList.remove("twitter");
});

linkedin.addEventListener('mouseover', function () {
  linksDiv.classList.add("linkedin");
});

linkedin.addEventListener('mouseout', function () {
  linksDiv.classList.remove("linkedin");
});
