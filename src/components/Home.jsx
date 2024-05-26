import { Link } from "react-router-dom";
import HeroImage from "../assets/heroImage.webp";

export default function Home() {
  return (
    <div className="flex flex-col gap-4 border-l-2 border-pink-700 px-6">
      <img
        src={HeroImage}
        alt="Hero Image"
        className=" h-40 w-40 md:h-60 md:w-60 rounded-full"
      />
      <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
        Hi 👋 I'm Faizan
      </h2>
      <h3 className="text-xl md:text-3xl font-medium tracking-tight">
        <span className="font-bold text-pink-700 selection:bg-pink-700 selection:text-white">
          FULL STACK DEVELOPER
        </span>{" "}
        from Mumbai.
      </h3>
      <p className="max-w-[60ch] text-base md:text-lg">
        I'm a{" "}
        <span className="text-pink-700 selection:bg-pink-700 selection:text-white">
          passionate developer,
        </span>{" "}
        dedicated to crafting visually stunning, pixel-perfect, and interactive
        websites. With a strong foundation in both frontend and backend
        technologies, I specialize in creating seamless user experiences that
        bring digital visions to life. My skills extend across the entire stack,
        allowing me to deliver comprehensive and innovative solutions. Eager to
        explore new tools and techniques, I am committed to turning ideas into
        reality and creating exceptional digital experiences.
      </p>
      <button className="flex items-center">
        <Link id="send_btn" to="mailto: faizanejazshaikh%40gmail%2Ecom">
          <div className="svg-wrapper-1">
            <div className="svg-wrapper">
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
            </div>
          </div>
          <span>Contact Me</span>
        </Link>
      </button>
    </div>
  );
}
