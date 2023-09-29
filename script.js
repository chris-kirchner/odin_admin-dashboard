const sidebarElement = document.getElementsByClassName("sidebar-element");
const sidebarIcon = document.getElementsByClassName("sidebar-icon");
const sidebarText = document.getElementsByClassName("sidebar-text");
// console.log(sidebarElement);

// Array.from(sidebarElement).forEach(e => {
//   console.log(e);
// })

for (let i = 0; i < sidebarElement.length; i++) {
  sidebarIcon[i].addEventListener("mouseenter", e => {
    sidebarIcon[i].style = "fill: var(--sidebar-text-mouseover-color);";
    sidebarText[i].style = "color: var(--sidebar-text-mouseover-color);";
  })
  sidebarIcon[i].addEventListener("mouseleave", e => {
    sidebarIcon[i].style = "fill: var(--sidebar-text-color);";
    sidebarText[i].style = "color: var(--sidebar-text-color);";
  })
  sidebarText[i].addEventListener("mouseenter", e => {
    sidebarText[i].style = "color: var(--sidebar-text-mouseover-color);";
    sidebarIcon[i].style = "fill: var(--sidebar-text-mouseover-color);";
  })
  sidebarText[i].addEventListener("mouseleave", e => {
    sidebarText[i].style = "color: var(--sidebar-text-color);";
    sidebarIcon[i].style = "fill: var(--sidebar-text-color);";
  })
};