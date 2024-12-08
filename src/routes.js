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
        path: "projects/:id",
        file: "./routes/projects.jsx",
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
