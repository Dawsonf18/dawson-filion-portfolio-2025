// Utility to update page title with your name
export const updatePageTitle = (pageTitle) => {
  if (pageTitle) {
    document.title = `${pageTitle} | Dawson Filion`;
  } else {
    document.title = 'Dawson Filion | AI Engineer & Full-Stack Developer';
  }
};

// Page titles for each route
export const pageTitles = {
  '/': 'Home',
  '/about': 'About',
  '/projects': 'Projects',
  '/contact': 'Contact',
};
