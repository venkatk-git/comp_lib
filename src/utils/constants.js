//Accordian
export const values = [
  {
    id: 0,
    heading: "Introduction to JavaScript",
    renderContent: () =>
      `      <p>
        JavaScript is a versatile programming language used in web development.
      </p>`,
  },
  {
    id: 1,
    heading: "Understanding React",
    renderContent: () =>
      `<p>React is a popular JavaScript library for building user interfaces.</p>`,
  },
  {
    id: 2,
    heading: "Learning CSS",
    renderContent: () => `<p>CSS is used to style and layout web pages.</p>`,
  },
  {
    id: 3,
    heading: "Getting Started with Node.js",
    renderContent: () =>
      `<p>Node.js allows JavaScript to be run on the server-side.</p>`,
  },
  {
    id: 4,
    heading: "Exploring Web APIs",
    renderContent: () =>
      `<p>
        Web APIs allow interaction between different software applications over
        the web.
      </p>`,
  },
];

//Folder Tree
export const FOLDERS = [
  {
    name: "Home",
    folders: [
      {
        name: "Movies",
        folders: [
          { name: "Adventure", folders: [], files: [] },
          { name: "Comedy", folders: [], files: [] },
        ],
      },
      {
        name: "Music",
        folders: [{ name: "Hip Hop", folders: [], files: [] }],
      },
      { name: "Pictures", folders: [], files: [] },
    ],
    files: [],
  },
];

//Breadcrumb
export const BREADCRUMB_LINKS = [
  {
    name: "Home",
    link: "#",
  },
  {
    name: "Library",
    link: "#",
  },
  {
    name: "Breadcrumb",
    link: "#",
  },
];

//Menu
export const MENUS = [
  {
    name: "Undo",
    shortcut: "Ctrl+Z",
    menus: [],
  },
  {
    name: "Redo",
    shortcut: "Ctrl+Y",
    menus: [],
  },
  {
    name: "Cut",
    shortcut: "Ctrl+X",
    menus: [],
  },
  {
    name: "Copy",
    shortcut: "Ctrl+C",
    menus: [],
  },
  {
    name: "Find",
    shortcut: "Ctrl+F",
    menus: [],
  },
  {
    name: "Replace",
    shortcut: "Ctrl+H",
    menus: [],
  },
  {
    name: "Preferences",
    menus: [
      {
        name: "Profile",
        menus: [
          {
            name: "Default",
            menus: [],
          },
          {
            name: "New Profile",
            menus: [],
          },
          {
            name: "Export Profile",
            menus: [],
          },
          {
            name: "Import Profile",
            menus: [
              {
                name: "Undo",
                shortcut: "Ctrl+Z",
                menus: [],
              },
              {
                name: "Redo",
                shortcut: "Ctrl+Y",
                menus: [],
              },
              {
                name: "Cut",
                shortcut: "Ctrl+X",
                menus: [],
              },
              {
                name: "Copy",
                shortcut: "Ctrl+C",
                menus: [],
              },
              {
                name: "Find",
                shortcut: "Ctrl+F",
                menus: [],
              },
              {
                name: "Replace",
                shortcut: "Ctrl+H",
                menus: [],
              },
              {
                name: "Preferences",
                menus: [
                  {
                    name: "Profile",
                    menus: [
                      {
                        name: "Default",
                        menus: [],
                      },
                      {
                        name: "New Profile",
                        menus: [],
                      },
                      {
                        name: "Export Profile",
                        menus: [],
                      },
                      {
                        name: "Import Profile",
                        menus: [],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];

//Search Datas
export const SEARCH_DATAS = [
  "Apple",
  "Amazon",
  "Alphabet",
  "Microsoft",
  "Tesla",
  "Meta",
  "Google",
  "Netflix",
  "Facebook",
  "How to learn React?",
  "Best places to visit in New York",
  "Latest trends in AI and machine learning",
  "What is the capital of France?",
  "Top 10 programming languages in 2024",
  "How to cook a perfect steak?",
  "Benefits of morning exercise",
  "The future of electric vehicles",
  "How to start a business",
  "Tips for remote work productivity",
  "Best coding practices for web developers",
  "Why is the sky blue?",
  "History of the Internet",
  "How to build a mobile app",
  "Top universities in the world",
  "Impact of social media on mental health",
  "The rise of cryptocurrency",
  "How to secure your online accounts",
  "Understanding blockchain technology",
  "Python vs JavaScript: Which one to learn?",
  "Best coffee shops in San Francisco",
  "How to optimize your website for SEO",
  "Top trends in digital marketing",
  "Benefits of meditation and mindfulness",
  "How to improve your public speaking skills",
  "Best practices for project management",
  "Introduction to cloud computing",
  "What is quantum computing?",
  "Top 5 tourist attractions in London",
  "How to manage personal finances",
  "Best online learning platforms",
  "The evolution of smartphones",
  "How to set up a home gym",
  "Tips for effective time management",
  "Top travel destinations in 2024",
  "How to create a successful YouTube channel",
  "Best books to read for personal growth",
  "How to stay motivated while working from home",
  "Introduction to data science",
  "The impact of AI on job markets",
  "How to write a compelling resume",
  "Best programming languages for beginners",
  "Top 10 healthy foods to include in your diet",
  "How to start a podcast",
  "The benefits of learning a new language",
];
