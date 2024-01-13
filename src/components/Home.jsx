import { Link } from "react-router-dom";

export default function Home() {
    return(
        <div className="flex flex-col gap-4 border-l-2 border-pink-700 px-6">
            <img src="src\assets\HeroImage.jpg" alt="Hero Image" className=" h-40 w-40 md:h-60 md:w-60 rounded-full"/>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter">Hi 👋 I'm Faizan</h2>
            <h3 className="text-xl md:text-3xl font-medium tracking-tighter"><span className="font-bold text-pink-700">Frontend Web Developer</span> from Mumbai.</h3>
            <p className="max-w-[60ch] text-base md:text-lg">I'm a <span className="text-pink-700">UI/UX</span> enthusiast dedicated to crafting visually stunning, pixel-perfect, and interactive websites. My goal is to create seamless user experiences, bringing digital visions to life. With a strong foundation in frontend technologies, I'm eager to explore new tools and techniques, delivering innovative solutions.</p>
            <button className="flex justify-start"><Link to='mailto: faizanejazshaikh%40gmail%2Ecom' className="font-medium tracking-tighter rounded-full bg-pink-700 text-white p-2 text-base md:text-lg duration-300 shadow-lg shadow-pink-500 hover:-translate-y-1">Contact Me</Link></button>
        </div>
    );
}