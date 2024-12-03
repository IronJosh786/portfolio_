import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";

function convert(m) {
  let { default: Component, ...rest } = m;
  return {
    ...rest,
    Component,
  };
}

const router = createBrowserRouter(
  [
    {
      path: "/",
      lazy: () => import("./routes/app").then(convert),
      children: [
        {
          path: "socialsphere",
          lazy: () => import("./routes/projects").then(convert),
        },
        {
          path: "wingsinprogress",
          lazy: () => import("./routes/projects").then(convert),
        },
        {
          path: "work",
          lazy: () => import("./routes/work").then(convert),
        },
        {
          path: "skills",
          lazy: () => import("./routes/skills").then(convert),
        },
        {
          path: "",
          lazy: () => import("./routes/home").then(convert),
        },
        {
          path: "*",
          lazy: () => import("./routes/home").then(convert),
        },
      ],
    },
  ],
  {
    future: {
      v7_relativeSplatPath: true,
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_skipActionErrorRevalidation: true,
    },
  }
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
