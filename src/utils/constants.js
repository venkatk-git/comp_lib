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
