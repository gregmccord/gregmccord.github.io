// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "A growing collection of your cool projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "Edit the `_data/repositories.yml` and change the `github_users` and `github_repos` lists to include your own GitHub profile and repositories.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "This is a description of the page. You can modify it in &#39;_pages/cv.md&#39;. You can also change or remove the top pdf download button.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-starter-code",
      
        title: "Starter_code",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/starter_code/";
        
      },
    },{id: "post-an-introduction-to-mpi-in-python-part-4",
      
        title: "An Introduction to MPI in Python - Part 4",
      
      description: "the devil is in the details",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/MPI-part4/";
        
      },
    },{id: "post-an-introduction-to-mpi-in-python-part-3",
      
        title: "An Introduction to MPI in Python - Part 3",
      
      description: "the devil is in the details",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/MPI-part3/";
        
      },
    },{id: "post-an-introduction-to-mpi-in-python-part-2",
      
        title: "An Introduction to MPI in Python - Part 2",
      
      description: "scaling to write proper parallelized functions",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/MPI-part2/";
        
      },
    },{id: "post-an-introduction-to-mpi-in-python-part-1",
      
        title: "An Introduction to MPI in Python - Part 1",
      
      description: "basic terminology, MPI functions, and blocking",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/MPI-part1/";
        
      },
    },{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/research1_COS424_project1/";
            },},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/website1_ticket-website-frontend/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%67%72%65%67.%6D.%6D%63%63%6F%72%64@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/gregmccord", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/gregory-mccord-a83162120", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
