const sidebarElement = document.getElementsByClassName("sidebar-element");
const sidebarIcon = document.getElementsByClassName("sidebar-icon");
const sidebarText = document.getElementsByClassName("sidebar-text");
const iconFavorite = document.getElementsByClassName("favorite");
const iconWatch1 = document.getElementsByClassName("card-icon watch1");
const iconWatch2 = document.getElementsByClassName("card-icon watch2");
const iconFork = document.getElementsByClassName("fork");
const favorite = document.getElementsByClassName("favorite");
const watch = document.getElementsByClassName("watch");
const fork = document.getElementsByClassName("fork");

for (let i = 0; i < favorite.length; i++) {
  favorite[i].addEventListener("mouseenter", e => {
    favorite[i].children[0].classList.add("hover");
    favorite[i].children[1].classList.add("hover");
  });
  favorite[i].addEventListener("mouseleave", e => {
    favorite[i].children[0].classList.remove("hover");
    favorite[i].children[1].classList.remove("hover");
    if (favorite[i].children[0].classList.contains("opacity1")) {
      favorite[i].children[0].classList.add("on");
      favorite[i].children[1].classList.add("on");
    } else {
      favorite[i].children[0].classList.remove("on");
      favorite[i].children[1].classList.remove("on");
    }
  });
  favorite[i].addEventListener("mousedown", e => {
    if (favorite[i].children[0].classList.contains("opacity0")) {
      favorite[i].children[0].classList.remove("opacity0");
      favorite[i].children[0].classList.add("opacity1");
    } else {
      favorite[i].children[0].classList.remove("opacity1");
      favorite[i].children[0].classList.add("opacity0");
    }
    favorite[i].children[0].classList.add("active");
    favorite[i].children[1].classList.add("active");
    setTimeout(() => {
      favorite[i].children[0].classList.remove("active");
      favorite[i].children[1].classList.remove("active");
    }, 220);
  });
}

for (let i = 0; i < watch.length; i++) {
  watch[i].addEventListener("mouseenter", e => {
    watch[i].children[0].classList.add("hover");
    watch[i].children[1].classList.add("hover");
  });
  watch[i].addEventListener("mouseleave", e => {
    watch[i].children[0].classList.remove("hover");
    watch[i].children[1].classList.remove("hover");
    if (watch[i].children[0].classList.contains("opacity1")) {
      watch[i].children[0].classList.add("on");
      watch[i].children[1].classList.add("on");
    } else {
      watch[i].children[0].classList.remove("on");
      watch[i].children[1].classList.remove("on");
    }
  });
  watch[i].addEventListener("mousedown", e => {
    if (watch[i].children[0].classList.contains("opacity0")) {
      watch[i].children[0].classList.remove("opacity0");
      watch[i].children[0].classList.add("opacity1");
    } else {
      watch[i].children[0].classList.remove("opacity1");
      watch[i].children[0].classList.add("opacity0");
    }
    watch[i].children[0].classList.add("active");
    watch[i].children[1].classList.add("active");
    setTimeout(() => {
      watch[i].children[0].classList.remove("active");
      watch[i].children[1].classList.remove("active");
    }, 220);
  });
}

for (let i = 0; i < fork.length; i++) {
  fork[i].addEventListener("mouseenter", e => {
    fork[i].children[0].classList.add("hover");
    // fork[i].children[1].classList.add("hover");
  });
  fork[i].addEventListener("mouseleave", e => {
    fork[i].children[0].classList.remove("hover");
    // fork[i].children[1].classList.remove("hover");
    if (fork[i].children[0].classList.contains("opacity1")) {
      fork[i].children[0].classList.add("on");
      // fork[i].children[1].classList.add("on");
    } else {
      fork[i].children[0].classList.remove("on");
      // fork[i].children[1].classList.remove("on");
    }
  });
  fork[i].addEventListener("mousedown", e => {
    if (fork[i].children[0].classList.contains("opacity1")) {
      fork[i].children[0].classList.remove("opacity1");
      // fork[i].children[0].classList.add("opacity1");
    } else {
      fork[i].children[0].classList.add("opacity1");
      // fork[i].children[0].classList.add("opacity0");
    }
    fork[i].children[0].classList.add("active");
    // fork[i].children[1].classList.add("active");
    setTimeout(() => {
      fork[i].children[0].classList.remove("active");
      // fork[i].children[1].classList.remove("active");
    }, 220);
  });
}

// let favorite1 = '<path d="M12,15.39L8.24,17.66L9.23,13.38L5.91,10.5L10.29,10.13L12,6.09L13.71,10.13L18.09,10.5L14.77,13.38L15.76,17.66M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z"></path>';
// let favorite2 = '<path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path>';
// let watch1 = '<path d="M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9M12,4.5C17,4.5 21.27,7.61 23,12C21.27,16.39 17,19.5 12,19.5C7,19.5 2.73,16.39 1,12C2.73,7.61 7,4.5 12,4.5M3.18,12C4.83,15.36 8.24,17.5 12,17.5C15.76,17.5 19.17,15.36 20.82,12C19.17,8.64 15.76,6.5 12,6.5C8.24,6.5 4.83,8.64 3.18,12Z"></path>';
// let watch2 = '<path d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z"></path>';
// let fork1 = '<path d="M6,2A3,3 0 0,1 9,5C9,6.28 8.19,7.38 7.06,7.81C7.15,8.27 7.39,8.83 8,9.63C9,10.92 11,12.83 12,14.17C13,12.83 15,10.92 16,9.63C16.61,8.83 16.85,8.27 16.94,7.81C15.81,7.38 15,6.28 15,5A3,3 0 0,1 18,2A3,3 0 0,1 21,5C21,6.32 20.14,7.45 18.95,7.85C18.87,8.37 18.64,9 18,9.83C17,11.17 15,13.08 14,14.38C13.39,15.17 13.15,15.73 13.06,16.19C14.19,16.62 15,17.72 15,19A3,3 0 0,1 12,22A3,3 0 0,1 9,19C9,17.72 9.81,16.62 10.94,16.19C10.85,15.73 10.61,15.17 10,14.38C9,13.08 7,11.17 6,9.83C5.36,9 5.13,8.37 5.05,7.85C3.86,7.45 3,6.32 3,5A3,3 0 0,1 6,2M6,4A1,1 0 0,0 5,5A1,1 0 0,0 6,6A1,1 0 0,0 7,5A1,1 0 0,0 6,4M18,4A1,1 0 0,0 17,5A1,1 0 0,0 18,6A1,1 0 0,0 19,5A1,1 0 0,0 18,4M12,18A1,1 0 0,0 11,19A1,1 0 0,0 12,20A1,1 0 0,0 13,19A1,1 0 0,0 12,18Z"></path>';



// console.log(sidebarElement);

// Array.from(sidebarElement).forEach(e => {
//   console.log(e);
// })

// for (let i = 0; i < sidebarElement.length; i++) {
//   sidebarIcon[i].addEventListener("mouseenter", e => {
//     sidebarIcon[i].style = "fill: var(--sidebar-text-mouseover-color);";
//     sidebarText[i].style = "color: var(--sidebar-text-mouseover-color);";
//   })
//   sidebarIcon[i].addEventListener("mouseleave", e => {
//     sidebarIcon[i].style = "fill: var(--sidebar-text-color);";
//     sidebarText[i].style = "color: var(--sidebar-text-color);";
//   })
//   sidebarText[i].addEventListener("mouseenter", e => {
//     sidebarText[i].style = "color: var(--sidebar-text-mouseover-color);";
//     sidebarIcon[i].style = "fill: var(--sidebar-text-mouseover-color);";
//   })
//   sidebarText[i].addEventListener("mouseleave", e => {
//     sidebarText[i].style = "color: var(--sidebar-text-color);";
//     sidebarIcon[i].style = "fill: var(--sidebar-text-color);";
//   })
// };