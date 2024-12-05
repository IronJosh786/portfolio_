export default [
  {
    path: "/",
    file: "./routes/app.jsx",
    children: [
      {
        index: true,
        file: "./routes/home.jsx",
      },
      {
        path: "projects/socialsphere",
        file: "./routes/projects.jsx",
        id: "social",
      },
      {
        path: "projects/wingsinprogress",
        file: "./routes/projects.jsx",
        id: "wings",
      },
      {
        path: "projects/*",
        file: "./routes/not-found.jsx",
        id: "project-not-found",
      },
      {
        path: "work",
        file: "./routes/work.jsx",
      },
      {
        path: "skills",
        file: "./routes/skills.jsx",
      },
      {
        path: "*",
        file: "./routes/not-found.jsx",
      },
    ],
  },
];
