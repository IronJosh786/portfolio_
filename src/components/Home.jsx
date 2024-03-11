import { Link } from "react-router-dom";
import HeroImage from "../assets/heroImage.webp";

export default function Home() {
  return (
    <div className="mt-8 flex flex-col gap-4 border-l-2 border-pink-700 px-6">
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
      <button className="flex justify-start">
        <Link
          to="mailto: faizanejazshaikh%40gmail%2Ecom"
          className="font-medium tracking-tighter rounded-full bg-pink-700 text-white p-2 text-base md:text-lg duration-300 shadow-lg shadow-pink-500 hover:-translate-y-1"
        >
          Contact Me
        </Link>
      </button>
    </div>
  );
}
