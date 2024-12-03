import { Link, NavLink, Outlet } from "react-router";

export default function App() {
  return (
    <>
      <div className="w-10/12 max-w-6xl m-auto bg-[#0D1117] h-dvh flex flex-col">
        <div className="flex justify-between items-center">
          <Link
            to={"/"}
            className="text-xl md:text-3xl font-bold cursor-pointer mt-2 text-pink-700"
          >
            <img
              src="/Logo.webp"
              alt="Logo"
              className="h-6 w-28 md:h-8 md:w-40"
            />
          </Link>
          <div className="flex gap-4 items-center mt-2">
            <Link
              className="cursor-pointer active:scale-95"
              to="mailto: faizanejazshaikh%40gmail%2Ecom"
              target="_blank"
              aria-label="mail to faizan"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                width="24"
                viewBox="0 0 512 512"
                className="duration-150 ease-in-out fill-white hover:fill-white/70"
              >
                <path d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z" />
              </svg>
            </Link>
            <Link
              className="cursor-pointer active:scale-95"
              to="https://github.com/IronJosh786"
              target="_blank"
              aria-label="visit github profile of faizan"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                width="24"
                viewBox="0 0 496 512"
                className="duration-150 ease-in-out fill-white hover:fill-white/70"
              >
                <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
              </svg>
            </Link>
            <Link
              className="cursor-pointer text-sm md:text-base bg-white text-[#0D1117] px-2 py-1 rounded-md font-medium duration-150 ease-in-out hover:bg-white/70 active:scale-95"
              to="https://drive.google.com/file/d/1wOr-glQNvFuiIwcrV_zhOuDsilbHvSX3/view?usp=sharing"
              target="_blank"
              aria-label="view resume of faizan"
            >
              Resume
            </Link>
          </div>
        </div>
        <div className="mt-16 lg:mt-12 flex flex-1 flex-col justify-center items-start lg:flex-row lg:justify-between lg:items-center">
          <div className="w-full lg:w-3/4">
            <Outlet />
          </div>
          <div className="mt-16 lg:mt-0 flex flex-col justify-between gap-8 lg:w-1/4">
            <div className="flex flex-col gap-8">
              <h3 className="text-base md:text-xl font-medium">Projects</h3>
              <div className="flex flex-col gap-4 border-t-2 border-l-2 border-pink-700 p-4 rounded-tl-md">
                <NavLink
                  className={({ isActive }) =>
                    `text-sm md:text-base underline decoration-pink-700 underline-offset-8 duration-300 hover:text-pink-700 ' ${
                      isActive ? "text-pink-700" : "text-white"
                    }`
                  }
                  to={"/projects/socialsphere"}
                >
                  Social Sphere
                </NavLink>
                <NavLink
                  className={({ isActive }) =>
                    `text-sm md:text-base underline decoration-pink-700 underline-offset-8 duration-300 hover:text-pink-700 ' ${
                      isActive ? "text-pink-700" : "text-white"
                    }`
                  }
                  to={"/projects/wingsinprogress"}
                >
                  Wings In Progress
                </NavLink>
              </div>
            </div>
            <NavLink
              className={({ isActive }) =>
                `text-base md:text-xl font-medium duration-300 underline decoration-pink-700 underline-offset-8 hover:text-pink-700 ${
                  isActive ? "text-pink-700" : "text-white"
                }`
              }
              to={"/work"}
            >
              Work Experience
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `text-base md:text-xl font-medium duration-300 underline decoration-pink-700 underline-offset-8 hover:text-pink-700 ${
                  isActive ? "text-pink-700" : "text-white"
                }`
              }
              to={"/skills"}
            >
              Skills
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `text-base md:text-xl font-medium duration-300 underline decoration-pink-700 underline-offset-8 hover:text-pink-700 ${
                  isActive ? "text-pink-700" : "text-white"
                }`
              }
              to={""}
            >
              Home
            </NavLink>
          </div>
        </div>
        <footer className="tracking-wider p-1 mt-8 text-xs text-center">
          FAIZAN EJAZ © {new Date().getFullYear()}
        </footer>
      </div>
    </>
  );
}
