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
        },{id: "nav-research",
          title: "research",
          description: "From theses to explorations - in-depth research in math, machine learning, and data science",
          section: "Navigation",
          handler: () => {
            window.location.href = "/research/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "Transforming curiosity into code — projects that build new skills and explore innovative ideas.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "post-starter-code",
      
        title: "Starter_code",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/starter_code/";
        
      },
    },{id: "post-an-introduction-to-mpi-in-python-part-3",
      
        title: "An Introduction to MPI in Python - Part 3",
      
      description: "I/O and the end of the basics",
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
    },{id: "post-an-introduction-to-mpi-in-python",
      
        title: "An Introduction to MPI in Python",
      
      description: "Learn the functions and put them into practice",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/MPI-Intro-Series/";
        
      },
    },{id: "projects-ticket-stub-generator",
          title: 'Ticket Stub Generator',
          description: "TSX and CSS practice front-end challenge",
          section: "Projects",handler: () => {
              window.location.href = "/projects/ticket-challenge-frontend/";
            },},{id: "research-lnsd-lnte-1-weak-tractability",
          title: '(lnsd,lnte-1)-Weak Tractability',
          description: "Undergraduate Independent Work in Complexity Theory",
          section: "Research",handler: () => {
              window.location.href = "/research/complexity-theory/";
            },},{id: "research-fragile-families-challenge",
          title: 'Fragile Families Challenge',
          description: "A Kaggle-style research project from COS 424 at Princeton",
          section: "Research",handler: () => {
              window.location.href = "/research/cos424-fragile-families/";
            },},{id: "research-inferring-movie-characteristics-from-dialogue",
          title: 'Inferring Movie Characteristics from Dialogue',
          description: "A novel, self-designed research paper from COS 424 at Princeton",
          section: "Research",handler: () => {
              window.location.href = "/research/cos424-movie-dialogue/";
            },},{id: "research-netflix-genre-based-predictions",
          title: 'Netflix Genre-Based Predictions',
          description: "An open-ended research project from COS 424 at Princeton",
          section: "Research",handler: () => {
              window.location.href = "/research/cos424-netflix-recommendations/";
            },},{id: "research-customer-review-sentiment-analysis",
          title: 'Customer Review Sentiment Analysis',
          description: "A Kaggle-style research project from COS 424 at Princeton",
          section: "Research",handler: () => {
              window.location.href = "/research/cos424-sentiment-analysis/";
            },},{id: "research-evaluating-compositionality-of-vision-and-language-models",
          title: 'Evaluating Compositionality of Vision and Language Models',
          description: "Undergraduate Thesis in Computer Vision",
          section: "Research",handler: () => {
              window.location.href = "/research/cv-thesis/";
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
