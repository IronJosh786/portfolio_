import React from "react";
import App from "./App.jsx";
import ReactDOM from "react-dom/client";
import { Skills, Home, ProjectTemplate } from "./components/index.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "socialsphere",
        element: (
          <ProjectTemplate
            heading={"Social Sphere"}
            description={
              "The application utilizes the MERN stack: MongoDB for scalable data storage, Express.js and Node.js for efficient backend operations, and React.js for dynamic frontend interfaces. Cloudinary seamlessly manages multimedia assets, optimizing storage and delivery. Together, these technologies create an intuitive platform for seamless user interaction and multimedia management."
            }
            site={"https://frontend-production-391c.up.railway.app/"}
            code={"https://github.com/IronJosh786/Social-Media-App"}
            tech={[
              "MongoDB",
              "Mongoose",
              "Express.js",
              "React.js",
              "Node.js",
              "Bcrypt",
              "JWT",
              "Cloudinary",
              "Multer",
              "Aggregation Pipeline",
              "Zod",
              "DaisyUI",
            ]}
          />
        ),
      },
      {
        path: "wingsinprogress",
        element: (
          <ProjectTemplate
            heading={"Wings In Progress"}
            description={
              "A sophisticated Next.js application which provides aspiring pilots with a comprehensive platform to manage and track their flight training progress, simplifying tasks such as logging flights, tracking progress, and analyzing performance metrics. It leverages a stack of cutting-edge technologies including NextAuth for secure authentication, MongoDB for flexible data storage, React.js for dynamic user interfaces, and Node.js for powerful backend logic. Implemented with TypeScript for type safety and Zod for data validation."
            }
            site={"https://wings-in-progress.vercel.app/"}
            code={"https://github.com/IronJosh786/WingsInProgress"}
            tech={[
              "Next.js",
              "NextAuth",
              "MongoDB",
              "Mongoose",
              "React.js",
              "Node.js",
              "Typescript",
              "Zod",
              "React Query",
              "Shadcn-UI",
              "Tailwind CSS",
            ]}
          />
        ),
      },
      {
        path: "money-transfer",
        element: (
          <ProjectTemplate
            heading={"Money Transfer"}
            description={
              "Harnessing the MERN stack, this application combines MongoDB, Express.js, React.js, and Node.js for a complete full-stack experience. React.js powers the frontend, providing dynamic interfaces and smooth user interactions. Meanwhile, Node.js and Express.js handle the backend operations with MongoDB ensuring robust data storage. Seamlessly integrated, this project delivers a sophisticated solution for managing transactions, multimedia assets, and user interactions, promising a seamless and intuitive platform."
            }
            site={"https://mern-money-transfer.onrender.com/"}
            code={"https://github.com/IronJosh786/MERN-Money-Transfer"}
            tech={[
              "MongoDB",
              "Mongoose",
              "Express.js",
              "React.js",
              "Node.js",
              "Bcrypt",
              "JWT",
              "Cloudinary",
              "Multer",
              "Aggregation Pipeline",
            ]}
          />
        ),
      },
      {
        path: "skills",
        element: <Skills />,
      },
      {
        path: "",
        element: <Home />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
