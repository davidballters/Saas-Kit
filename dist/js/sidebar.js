//function for header
const sidebar = document.querySelector(".sidebar");
const sidebarTitle = sidebar.querySelector(".sidebar__title");
const toggleButton = sidebar.querySelector('.toggle');

sidebarTitle.addEventListener("click", () => {
  toggleButton.click();
});

toggleButton.addEventListener("click", () => {
  if (toggleButton.classList.contains("active")) {
    toggleButton.classList.remove('active');
    sidebar.classList.remove('sidebar--is-expanded');
    sidebarTitle.textContent = "SaaS";
  } else {
    toggleButton.classList.add('active');
    sidebar.classList.add('sidebar--is-expanded');
    setTimeout(()=>{
      sidebarTitle.textContent = "SaaS Kit";
    }, 200);
  }
});

const menuItemWithSubmenu = document.querySelectorAll('.menu__list-item--with-submenu');
menuItemWithSubmenu.forEach(listItem => {
  listItem.addEventListener('click', () => {
    if (!sidebar.classList.contains('sidebar--is-expanded')) {
      return false;
    }

    if (listItem.classList.contains('show-submenu')) {
      listItem.classList.remove('show-submenu');
    }
    else {
      listItem.classList.add('show-submenu');
    }
  });
});

//function for  profile colors

const profiles = document.querySelectorAll('.profile');

profiles.forEach(profile => {
  profile.addEventListener('click', () => {
    if (profile.classList.contains('selected')) {
      profile.classList.remove('selected');
    }
    else {
      profiles.forEach(otherProfile => {
        otherProfile.classList.remove('selected');
      });
      
      profile.classList.add('selected');
    }
  });
});
