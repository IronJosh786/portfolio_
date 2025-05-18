import { Link } from "react-router";

export default function Home() {
  return (
    <div className="flex flex-col gap-2 border-l-2 border-sky-500 pl-6 lg:pr-6">
      <img
        src="/heroImage.webp"
        alt="Hero Image"
        className="h-32 w-32 md:h-40 md:w-40 rounded-xl mb-2"
      />
      <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
        Hi 👋 I'm Faizan
      </h2>
      <h3 className="text-xl md:text-3xl font-medium tracking-tight">
        <span className="font-bold text-sky-500 selection:bg-sky-500 selection:text-gray-300">
          Software Engineer
        </span>{" "}
        from Mumbai.
      </h3>
      <p className="max-w-[50ch] xl:max-w-[60ch] text-base md:text-lg">
        Focused on crafting visually stunning, and interactive applications.
        With expertise in frontend and backend technologies, I specialize in
        seamless user experiences, delivering innovative, full-stack solutions.{" "}
      </p>
      <Link
        id="send_btn"
        className="mt-1 bg-sky-700 duration-150 ease-in-out hover:bg-sky-700/70 w-max"
        to="mailto: faizanejazshaikh%40gmail%2Ecom"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="16"
          height="16"
        >
          <path fill="none" d="M0 0h24v24H0z"></path>
          <path
            fill="currentColor"
            d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
          ></path>
        </svg>
        <span>Contact Me</span>
      </Link>
    </div>
  );
}
