var ToShowul = document.querySelector('header nav .toggle-menu + ul');

// Function to apply mobile styles
function applyMobileStyles() {
  ToShowul.style.display = 'flex';
  ToShowul.style.flexDirection = 'column';
  ToShowul.style.position = 'absolute';
  ToShowul.style.top = '100%';
  ToShowul.style.left = '0';
  ToShowul.style.width = '100%';
  ToShowul.style.backgroundColor = 'rgba(0, 0, 0, 0.504)';
  document.querySelector('header nav .toggle-menu + ul li').style.padding = '5px 0';
}

// Function to apply desktop styles
function applyDesktopStyles() {
  ToShowul.style.display = 'flex';
  ToShowul.style.flexDirection = 'row';
  ToShowul.style.position = 'static';
  ToShowul.style.width = 'auto';
  ToShowul.style.backgroundColor = 'transparent';
  document.querySelector('header nav .toggle-menu + ul li').style.padding = '0';
}

// Check initial viewport width
if (window.matchMedia("(max-width: 768px)").matches) {
  applyMobileStyles();
} else {
  applyDesktopStyles();
}

// Listen for click events
document.querySelector('header nav .toggle-menu').addEventListener('click', function(event) {
  if (window.matchMedia("(max-width: 768px)").matches) {
    applyMobileStyles();
  }
  event.stopPropagation(); // Prevent the click from bubbling up to the document
});

document.addEventListener('click', function() {
  if (window.matchMedia("(max-width: 768px)").matches) {
    ToShowul.style.display = 'none';
  }
});

// Listen for resize events
window.addEventListener('resize', function() {
  if (window.matchMedia("(max-width: 768px)").matches) {
    applyMobileStyles();
  } else {
    applyDesktopStyles();
  }
});