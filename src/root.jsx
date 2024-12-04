import styles from "./style.css?url";
import { Links, Meta, Outlet, Scripts, ScrollRestoration } from "react-router";

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
        <title>Faizan</title>
        <meta
          name="description"
          content="Hi, Faizan here! I'm a Full Stack developer crafting visually appealing and highly functional web experiences."
        />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
