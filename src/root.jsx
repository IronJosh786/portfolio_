import styles from "./style.css?url";
import { Links, Meta, Outlet, Scripts, ScrollRestoration } from "react-router";

export const meta = () => [
  { title: "Faizan" },
  {
    name: "description",
    content:
      "Hi, Faizan here! I'm a Full Stack developer crafting visually appealing and highly functional web experiences.",
  },
  {
    property: "og:image",
    content:
      "https://drive.google.com/file/d/1080OoN4b2oNPiJgiK4XzOip7Fn5Ete6p/view?usp=sharing",
  },
];

export const links = () => [
  {
    rel: "preload",
    href: "/Poppins-Regular.ttf",
    as: "font",
    type: "font/ttf",
    crossOrigin: "anonymous",
  },
  { rel: "preload", href: "/heroImage.webp", as: "image" },
  { rel: "preload", href: "/Logo.webp", as: "image" },
  { rel: "preload", href: "/Futureblink.webp", as: "image" },
  { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
  { rel: "stylesheet", href: styles },
];

export default function Root() {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <Meta />
        <Links />
      </head>
      <body className="bg-[#0D1117] text-white">
        <Outlet />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
