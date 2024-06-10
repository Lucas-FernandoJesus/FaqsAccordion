// scripts.js
document.addEventListener('DOMContentLoaded', function() {
  const headers = document.querySelectorAll('.accordion-header');
  
  headers.forEach(header => {
      header.addEventListener('click', function() {
          const content = this.nextElementSibling;
          
          if (content.style.display === 'block') {
              content.style.display = 'none';
          } else {
              document.querySelectorAll('.accordion-content').forEach(item => item.style.display = 'none');
              content.style.display = 'block';
          }
      });
  });
});

function changeIcon() {
    var icon = document.getElementById("icon");
    if (icon.src.includes("./assets/images/icon-plus.svg")) {
        icon.src = "./assets/images/icon-plus.svg";
    } else {
        icon.src = "./assets/images/icon-minus.svg";
    }
    icon.src = iconSrc;
}