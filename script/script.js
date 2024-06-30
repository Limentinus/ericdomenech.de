function dropFunction(category) {
  document.getElementById(category).classList.toggle("show");
  let dropdowns = document.getElementsByClassName("dropbtn");
  for (i = 0; i < dropdowns.length; i++) {
    let catTitle = dropdowns[i];
    catTitle.classList.toggle("hide");
  }
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    let dropdowns = document.getElementsByClassName("dropdown-content");
    let dropbtns = document.getElementsByClassName("dropbtn");
    let i;
    for (i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      let dropbtn = dropbtns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
      if (dropbtn.classList.contains("hide")) {
        dropbtn.classList.remove("hide");
      }
    }
  }
};

function langFunction(language) {
  let langLinks = document.getElementsByClassName(language);
  console.log(langLinks);
  for (i = 0; i < langLinks.length; i++) {
    let langLink = langLinks[i];
    langLink.classList.toggle("show");
  }
  let langButtons = document.getElementsByClassName("lang-button");
  for (i = 0; i < langButtons.length; i++) {
    let langButton = langButtons[i];
    langButton.classList.toggle("hide");
  }
}
