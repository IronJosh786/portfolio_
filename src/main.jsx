import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Skills, Home, ProjectTemplate } from "./components/index.js";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
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
        path: "youtube-backend",
        element: (
          <ProjectTemplate
            heading={"Youtube Backend"}
            description={
              "Built on Node.js and Express.js, this backend project provides a solid foundation for a video content management system. Leveraging MongoDB for data storage and Cloudinary for efficient multimedia asset management, it ensures a scalable and reliable backend infrastructure. Seamlessly handle user authentication, video uploads, likes, comments, and subscriptions. The project focuses on security and performance, utilizing these technologies to create a robust backend for your video platform."
            }
            code={"https://github.com/IronJosh786/Backend"}
            tech={[
              "MongoDB",
              "Mongoose",
              "Express.js",
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
        path: "pagepalette",
        element: (
          <ProjectTemplate
            heading={"Page Palette"}
            description={
              "A dynamic web application skillfully crafted with React and JavaScript. Uncover an extensive collection of books fetched from the Google Books API. Seamlessly explore genres, utilize the search feature to find your next read, and effortlessly bookmark favorites for later. Delve into detailed views for an informed and delightful reading experience."
            }
            site={"https://page-palette.netlify.app/"}
            code={"https://github.com/IronJosh786/PagePalette"}
            tech={[
              "React.js",
              "React Router DOM",
              "Local Storage",
              "Google Books API",
              "Tailwind CSS",
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
